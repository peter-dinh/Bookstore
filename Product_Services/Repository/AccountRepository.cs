using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Product_Services.Infastructure;
using Product_Services.Models;

namespace Product_Services.Repository
{
    public interface IAccountRepository : IRepository<Account>
    {

    }
    public class AccountRepository : Repository<Account>, IAccountRepository
    {
        Product_Context _Context;
        public AccountRepository(Product_Context context) : base(context)
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