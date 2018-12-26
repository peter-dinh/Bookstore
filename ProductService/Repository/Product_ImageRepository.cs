using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using ProductService.Infastructure;
using ProductService.Models;

namespace ProductService.Repository
{
    public interface IProduct_ImageRepository : IRepository<Product_Image>
    {

    }
    public class Product_ImageRepository : Repository<Product_Image>, IProduct_ImageRepository
    {
        ProductContext _Context;
        public Product_ImageRepository(ProductContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Product_Image entity)
        {
            Product_Image target = _Context.Product_Images.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}