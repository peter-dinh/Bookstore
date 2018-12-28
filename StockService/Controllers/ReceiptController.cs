using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StockService.Models;
using StockService.Repository;
using StockService.Infastructure;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Authorization;

namespace StockService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "1")]
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
        
        [Route("All")]
        [HttpGet]
        public IActionResult Get()
        {
            var model = _service.GetAll();
            return Ok(model);
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

        [Route("GetReceiptDetail/{id}")]
        [HttpGet]
        public IActionResult GetReceiptDetail(int id)
        {
            try
            {
                var target = _service_detail.GetMulti(c => c.ReceiptID == id);

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

        [Route("CreateReceipt")]
        [HttpPost]
        public IActionResult CreateReceipt([FromBody]JObject data)
        {
            
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            Receipt model = data["receipt"].ToObject<Receipt>();
            _service.Add(model);
            return Ok(model);
        }

        [Route("CreateReceiptDetail")]
        [HttpPost]
        public IActionResult CreateReceiptDetail([FromBody]JObject data)
        {
            
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
             ReceiptDetail model_item = data.ToObject<ReceiptDetail>();
            _service_detail.Add(model_item);
            return Ok(model_item);
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
                model_item.ReceiptID = model.Id;
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

        [Route("DelReceiptDatail")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var receiptDetail = _service_detail.GetSingleById(id);
            if (receiptDetail == null)
            {
                return NotFound();
            }
            _service_detail.Delete(receiptDetail);
            return Ok();
        }
    }
}