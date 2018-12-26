using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProductService.Models;
using ProductService.Repository;
using ProductService.Infastructure;
using AccountService.Infastructure;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace ProductService.Controllers
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
        
        // GET api/category
        [Route("All")]
        [HttpGet]
    
        public IActionResult Get()
        {
            var model = _service.GetAll();
            return Ok(model);
        }

        // [Authorize(Roles = "1")]
        [Route("GetAvailable")]
        [HttpGet]
        public IActionResult GetAvailable()
        {
            var model = _service.GetMulti(c => c.Lock == false);
            return Ok(model);
        }

        [Authorize(Roles = "1")]
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

        [Route("login")]
        [HttpPost]

        public IActionResult Login([FromBody]Login data)
        {
            
            var account = _service.GetSingleByCondition(c => c.Email == data.Email && c.Password == Encryptor.MD5Hash(data.Password));
            if (account != null){
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
        public IActionResult Register([FromBody]Account model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            model.Password = Encryptor.MD5Hash(model.Password);
            model.AccountType = 0;
            model.Created = Convert.ToDateTime(model.Created);
            _service.Add(model);
            return Ok(model);
        }

        [HttpPost]
        public IActionResult Create([FromBody]Account model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            model.Password = Encryptor.MD5Hash(model.Password);
            model.Created = Convert.ToDateTime(model.Created);
            _service.Add(model);
            return Ok(model);
        }

        [Authorize(Roles = "1")]
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Account model)
        {
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