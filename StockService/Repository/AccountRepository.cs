using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using StockService.Infastructure;
using StockService.Models;

namespace StockService.Repository
{
    public interface IAccountRepository : IRepository<Account>
    {

    }
    public class AccountRepository : Repository<Account>, IAccountRepository
    {
        StockContext _Context;
        public AccountRepository(StockContext context) : base(context)
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