using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductService.Models;
using Microsoft.AspNetCore.Mvc;
using ProductService.Repository;
using ProductService.Infastructure;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json.Linq;

/*
{
  "CategoryID":"CAT001",
  "CategoryName":"Sách giáo khoa",
  "Quantity":0,
  "Is_Active":"True",
  "Archive":"True"
}
{
  "CategoryID":"CAT002",
  "CategoryName":"Sách tiếng việt",
  "Quantity":0,
  "Is_Active":"True",
  "Archive":"True"
}
 */
namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _service;
        private readonly IProduct_CategoryRepository _service_pro_cat;
        public CategoryController(ICategoryRepository service,  IProduct_CategoryRepository service_pro_cat)
        {
            _service = service;
            _service_pro_cat = service_pro_cat;
            
        }
        // GET api/category
        [Route("All")]
        [HttpGet]
        [Authorize(Roles = "1")]
        public IActionResult Get()
        {
            var model = _service.GetAll();
            return Ok(model);
        }

        [Route("GetAvailable")]
        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetAvailable()
        {
            var model = _service.GetMulti(c => c.Archive == false);
            return Ok(model);
        }

        [HttpGet("{id}")]
        public IActionResult GetCategory(int id)
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
                    if (target.Archive == true){
                        return NotFound();
                    }
                    return Ok(target);
                }        
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        [Authorize(Roles = "1")]
        public IActionResult Create([FromBody]JObject json)
        {
            Category model = json.ToObject<Category>();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            _service.Add(model);
            return Ok(model);
        }


        [HttpPut("{id}")]
        [Authorize(Roles = "1")]
        public IActionResult Update(int id, [FromBody]JObject json)
        {
            Category model = json.ToObject<Category>();
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


        [HttpDelete("{id}")]
        [Authorize(Roles = "1")]
        public IActionResult Delete(int id)
        {
            var Category = _service.GetSingleById(id);
            if (Category == null)
            {
                return NotFound();
            }
            if (Category.Archive == true){
                return NotFound();
            }
            Category.Archive = true;
            _service.Update(Category);
            var list_category = _service_pro_cat.GetMulti(c => c.CategoryID == id);
            foreach (var item in list_category)
            {
                item.Archive = true;
                item.Is_Active = false;
                _service_pro_cat.Update(item);
            }
            return Ok(Category);
        }
    }
}