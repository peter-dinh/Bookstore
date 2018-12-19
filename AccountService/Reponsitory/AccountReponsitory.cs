using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using AccountService.Infastructure;
using AccountService.Models;

namespace AccountService.Repository
{
    public interface IAccountRepository : IRepository<Account>
    {

    }
    public class AccountRepository : Repository<Account>, IAccountRepository
    {
        AccountContext _Context;
        public AccountRepository(Product_Context context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Account entity)
        {
            Account target = _Context.Account.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}