using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using StockService.Infastructure;
using StockService.Models;

namespace StockService.Repository
{
    public interface IReceiptRepository : IRepository<Receipt>
    {

    }
    public class ReceiptRepository : Repository<Receipt>, IReceiptRepository
    {
        StockContext _Context;
        public ReceiptRepository(StockContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(Receipt entity)
        {
            Receipt target = _Context.Receipts.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}