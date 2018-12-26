using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using ProductService.Infastructure;
using ProductService.Models;

namespace ProductService.Repository
{
    public interface IImageRepository : IRepository<Image>
    {

    }
    public class ImageRepository : Repository<Image>, IImageRepository
    {
        ProductContext _Context;
        public ImageRepository(ProductContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Image entity)
        {
            Image target = _Context.Images.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}