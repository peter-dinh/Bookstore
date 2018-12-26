using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using OrderService.Infastructure;
using OrderService.Models;

namespace OrderService.Repository
{
    public interface IAccountRepository : IRepository<Account>
    {

    }
    public class AccountRepository : Repository<Account>, IAccountRepository
    {
        OrderContext _Context;
        public AccountRepository(OrderContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Account entity)
        {
            Account target = _Context.Accounts.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}