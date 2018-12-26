using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StockService.Models;
using StockService.Repository;
using StockService.Infastructure;
using Newtonsoft.Json.Linq;

namespace StockService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceiptController : ControllerBase
    {
        private IReceiptRepository _service;
        private IReceiptDetailRepository _service_detail;
        private IProductRepository _service_product;
        public ReceiptController(IReceiptRepository service, IReceiptDetailRepository service_detail, IProductRepository service_product)
        {
            _service = service;
            _service_detail = service_detail;
            _service_product = service_product;
        }
        
        
        [HttpGet("{id}")]
        public IActionResult GetReceipt(int id)
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
        public IActionResult Create([FromBody]JObject data)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            Receipt model = data["receipt"].ToObject<Receipt>();
            _service.Add(model);
            var list_item = data["receipt_detail"].ToList();
            foreach (var item in list_item)
            {
                ReceiptDetail model_item = item.ToObject<ReceiptDetail>();
                _service_detail.Add(model_item);
            }
            
            return Ok(model);
        }



        [Route("Cancel")]
        [HttpPut("{id}")]
        public IActionResult Cancel(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Receipt = _service.GetSingleById(id);
            if (Receipt == null)
            {
                return NotFound();
            }
            Receipt.State = 0;
            _service.Update(Receipt);
            return Ok();
        }

        [Route("Success")]
        [HttpPut("{id}")]
        public IActionResult Success(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Receipt = _service.GetSingleById(id);
            if (Receipt == null)
            {
                return NotFound();
            }
            Receipt.State = 1;
            _service.Update(Receipt);
            var list_receipt_detail = _service_detail.GetMulti(c => c.ReceiptID == Receipt.Id);
            foreach (var item in list_receipt_detail)
            {
                Product model_product = _service_product.GetSingleByCondition(c => c.ProductID == item.ProductID);
                model_product.Quantity += item.Quantity; 
                _service_product.Add(model_product);
            }
            return Ok();
        }

        // [HttpDelete("{id}")]
        // public IActionResult Delete(int id)
        // {
        //     var Receipt = _service.GetSingleById(id);
        //     if (Receipt == null)
        //     {
        //         return NotFound();
        //     }
        //     Receipt.State = 1;
        //     _service.Update(Receipt);
        //     return Ok(Receipt);
        // }
    }
}