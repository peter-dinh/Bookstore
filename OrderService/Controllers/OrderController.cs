using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderService.Models;
using OrderService.Repository;
using OrderService.Infastructure;
using Newtonsoft.Json.Linq;

namespace OrderService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderRepository _service;
        private IOrderItemRepository _service_item;
        private IProductRepository _service_product;
        public OrderController(IOrderRepository service, IOrderItemRepository service_item, IProductRepository service_product)
        {
            _service = service;
            _service_item = service_item;
            _service_product = service_product;
        }
        
        
        [HttpGet("{id}")]
        public IActionResult GetOrder(int id)
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
            Order model = data["order"].ToObject<Order>();
            _service.Add(model);
            var list_item = data["order_item"].ToList();
            foreach (var item in list_item)
            {
                OrderItem model_item = item.ToObject<OrderItem>();
                _service_item.Add(model_item);
                Product model_product = _service_product.GetSingleByCondition(c => c.ProductID == model_item.ProductID);
                model_product.Quantity -= model_item.Quantity; 
                _service_product.Update(model_product);
            }
            
            return Ok(model);
        }


        [Route("Delivering")]
        [HttpPut("{id}")]
        public IActionResult Delivering(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Order = _service.GetSingleById(id);
            if (Order == null)
            {
                return NotFound();
            }
            Order.State = 3;
            _service.Update(Order);
            return Ok();
        }

        [Route("Success")]
        [HttpPut("{id}")]
        public IActionResult Success(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Order = _service.GetSingleById(id);
            if (Order == null)
            {
                return NotFound();
            }
            Order.State = 1;
            _service.Update(Order);
            return Ok();
        }

        [Route("Cancel")]
        [HttpPut("{id}")]
        public IActionResult Cancel(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Order = _service.GetSingleById(id);
            if (Order == null)
            {
                return NotFound();
            }
            Order.State = 0;
            _service.Update(Order);
            var list_item_order = _service_item.GetMulti(c => c.OrderID == Order.Id);
            foreach (var item in list_item_order)
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
        //     var Order = _service.GetSingleById(id);
        //     if (Order == null)
        //     {
        //         return NotFound();
        //     }
        //     Order.State = 1;
        //     _service.Update(Order);
        //     return Ok(Order);
        // }
    }
}