using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using ProductService.Infastructure;
using ProductService.Models;

namespace ProductService.Repository
{
    public interface IProduct_CategoryRepository : IRepository<Product_Category>
    {

    }
    public class Product_CategoryRepository : Repository<Product_Category>, IProduct_CategoryRepository
    {
        ProductContext _Context;
        public Product_CategoryRepository(ProductContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Product_Category entity)
        {
            Product_Category target = _Context.Product_Categories.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}