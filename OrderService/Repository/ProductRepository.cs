using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using OrderService.Infastructure;
using OrderService.Models;

namespace OrderService.Repository
{
    public interface IProductRepository : IRepository<Product>
    {

    }
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        OrderContext _Context;
        public ProductRepository(OrderContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Product entity)
        {
            Product target = _Context.Products.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}