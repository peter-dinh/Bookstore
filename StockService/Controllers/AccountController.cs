using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StockService.Models;
using StockService.Repository;
using StockService.Infastructure;

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

        [HttpPost]
        public IActionResult Create([FromBody]Account model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            _service.Add(model);
            return Ok(model);
        }


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