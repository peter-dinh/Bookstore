using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Product_Services.Infastructure;
using Product_Services.Models;

namespace Product_Services.Repository
{
    public interface ICartItemRepository : IRepository<CartItem>
    {

    }
    public class CartItemRepository : Repository<CartItem>, ICartItemRepository
    {
        Product_Context _Context;
        public CartItemRepository(Product_Context context) : base(context)
        {
            _Context = context;
        }
        public override void Update(CartItem entity)
        {
            CartItem target = _Context.CartItems.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}