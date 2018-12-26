using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OrderService.Models;
using Microsoft.AspNetCore.Mvc;
using OrderService.Repository;
using OrderService.Infastructure;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace OrderService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductRepository _service;
        public ProductController( IProductRepository service)
        {
            _service = service;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var model = _service.GetAll();
            return Ok(model);
        }
        
        [HttpPost]
        public IActionResult Create([FromBody]Product model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            _service.Add(model);
            return Ok(model);
        }
        
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Product model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Category = _service.GetSingleById(id);
            if (Category == null)
            {
                return NotFound();
            }
            _service.Update(model);
            return Ok(model);
        }
    }
}