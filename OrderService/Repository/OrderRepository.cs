using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using OrderService.Infastructure;
using OrderService.Models;

namespace OrderService.Repository
{
    public interface IOrderRepository : IRepository<Order>
    {

    }
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        OrderContext _Context;
        public OrderRepository(OrderContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Order entity)
        {
            Order target = _Context.Orders.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}