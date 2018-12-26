using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using ProductService.Infastructure;
using ProductService.Models;

namespace ProductService.Repository
{
    public interface IRatingRepository : IRepository<Rating>
    {

    }
    public class RatingRepository : Repository<Rating>, IRatingRepository
    {
        ProductContext _Context;
        public RatingRepository(ProductContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Rating entity)
        {
            Rating target = _Context.Ratings.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}