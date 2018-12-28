using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StockService.Models;
using StockService.Repository;
using StockService.Infastructure;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json.Linq;

namespace StockService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAccountRepository _service;
        public AccountController(IAccountRepository service)
        {
            _service = service;
        }
        
        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetAccount(int id)
        {
            try
            {
                var target = _service.GetSingleById(id);

                if (target == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(target);
                }        
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Route("CheckToken")]
        [HttpGet]
        [Authorize]
        public IActionResult GetInfoAccountToken()
        {
            try
            {
                var currentUser = HttpContext.User;
                if (currentUser.HasClaim(c => c.Type == "Email"))
                {
                    var email = currentUser.Claims.FirstOrDefault(c => c.Type == "Email").Value;
                    Account account = _service.GetSingleByCondition(c => c.Email == email);
                    if (account != null){
                        return Ok(new
                        {
                            email = email,
                            role = account.AccountType
                        });
                    }
                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
            return BadRequest();
        }

        [Route("login")]
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]JObject json)
        {
            Login data = json.ToObject<Login>();
            var account = _service.GetSingleByCondition(c => c.Email == data.Email && c.Password == Encryptor.MD5Hash(data.Password));
            if (account != null){
                if (account.Lock == true)
                {
                    return BadRequest();
                }

                var claims = new []
                {
                    new Claim("Email", account.Email),
                    new Claim(ClaimTypes.Role, account.AccountType.ToString()),
                };

                var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("day la ma khoa token bi mat"));
                var token = new JwtSecurityToken(
                    issuer: "http://abc.com",
                    audience: "http://abc.com",
                    expires: account.Created.AddMonths(12),
                    claims: claims,
                    signingCredentials: new Microsoft.IdentityModel.Tokens.SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256Signature)
                );
                return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                    }
                );
            } 
            return NotFound();
        }

        [Route("register")]
        [HttpPost]
        [AllowAnonymous]
        public IActionResult Register([FromBody]JObject json)
        {
            Account model = json.ToObject<Account>();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            model.Password = Encryptor.MD5Hash(model.Password);
            model.AccountType = 0;
            model.Created = Convert.ToDateTime(model.Created);
            _service.Add(model);
            return Ok(model);
        }


        [HttpPost]
        public IActionResult Create([FromBody]JObject json)
        {
            Account model = json.ToObject<Account>();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            model.Password = Encryptor.MD5Hash(model.Password);
            model.Created = Convert.ToDateTime(model.Created);
            _service.Add(model);
            return Ok(model);
        }

        [Authorize(Roles = "1")]
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]JObject json)
        {
            Account model = json.ToObject<Account>();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Account = _service.GetSingleById(id);
            if (Account == null)
            {
                return NotFound();
            }
            _service.Update(model);
            return Ok(model);
        }


        [HttpDelete("{id}")]
        [Authorize(Roles = "1")]
        public IActionResult Delete(int id)
        {
            var Account = _service.GetSingleById(id);
            if (Account == null)
            {
                return NotFound();
            }
            Account.Lock = true;
            _service.Update(Account);
            return Ok(Account);
        }
    }
}