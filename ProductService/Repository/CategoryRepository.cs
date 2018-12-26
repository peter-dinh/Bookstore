using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using ProductService.Infastructure;
using ProductService.Models;

namespace ProductService.Repository
{
    public interface ICategoryRepository : IRepository<Category>
    {

    }
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        ProductContext _Context;
        public CategoryRepository(ProductContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Category entity)
        {
            Category target = _Context.Categories.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}