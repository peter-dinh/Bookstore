using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductService.Models;
using Microsoft.AspNetCore.Mvc;
using ProductService.Repository;
using ProductService.Infastructure;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using Microsoft.AspNetCore.Authorization;

namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private readonly IRatingRepository _service;
        public RatingController(IRatingRepository service )
        {
            _service = service;
        }
        // GET api/category
        [Authorize(Roles = "1")]
        [Route("All")]
        [HttpGet]
        public IActionResult Get()
        {
            var model = _service.GetAll();
            return Ok(model);
        }

        [Route("GetAvailable")]
        [HttpGet]
        public IActionResult GetAvailable()
        {
            var model = _service.GetMulti(c => c.Is_Active == true);
            return Ok(model);
        }

        [HttpGet("{id}")]
        public IActionResult GetRating(int id)
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
        [Authorize(Roles = "0")]
        public IActionResult Create([FromBody]JObject json)
        {
            Rating model = json.ToObject<Rating>();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            _service.Add(model);
            return Ok(model);
        }


        [HttpPut("{id}")]
        [Authorize(Roles = "0")]
        public IActionResult Update(int id, [FromBody]JObject json)
        {
            Rating model = json.ToObject<Rating>();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Rating = _service.GetSingleById(id);
            if (Rating == null)
            {
                return NotFound();
            }
            _service.Update(model);
            return Ok(model);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var Rating = _service.GetSingleById(id);
            if (Rating == null)
            {
                return NotFound();
            }
            Rating.Is_Active = false;
            _service.Update(Rating);
            return Ok(Rating);
        }
    }
}