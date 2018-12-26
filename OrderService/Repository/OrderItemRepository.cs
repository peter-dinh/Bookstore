using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using OrderService.Infastructure;
using OrderService.Models;

namespace OrderService.Repository
{
    public interface IOrderItemRepository : IRepository<OrderItem>
    {

    }
    public class OrderItemRepository : Repository<OrderItem>, IOrderItemRepository
    {
        OrderContext _Context;
        public OrderItemRepository(OrderContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(OrderItem entity)
        {
            OrderItem target = _Context.OrderItems.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}