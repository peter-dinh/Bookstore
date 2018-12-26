using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using StockService.Infastructure;
using StockService.Models;

namespace StockService.Repository
{
    public interface IReceiptDetailRepository : IRepository<ReceiptDetail>
    {

    }
    public class ReceiptDetailRepository : Repository<ReceiptDetail>, IReceiptDetailRepository
    {
        StockContext _Context;
        public ReceiptDetailRepository(StockContext context) : base(context)
        {
            _Context = context;
        }
        public override void Update(ReceiptDetail entity)
        {
            ReceiptDetail target = _Context.ReceiptDetails.Where(c=>c.Id==entity.Id).FirstOrDefault();
            _Context.Entry(target).CurrentValues.SetValues(entity);
            _Context.SaveChanges();
        }
    }
}