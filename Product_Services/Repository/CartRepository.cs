using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Product_Services.Infastructure;
using Product_Services.Models;

namespace Product_Services.Repository
{
    public interface ICartRepository : IRepository<Cart>
    {

    }
    public class CartRepository : Repository<Cart>, ICartRepository
    {
        Product_Context _Context;
        public CartRepository(Product_Context context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Cart entity)
        {
            Cart target = _Context.Carts.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}