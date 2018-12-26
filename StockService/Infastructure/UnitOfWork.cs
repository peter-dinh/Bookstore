using StockService.Models;

namespace StockService.Infastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        public StockContext Context { get; }

        public UnitOfWork(StockContext context)
        {
            Context = context;
        }
        public void Commit()
        {
            Context.SaveChanges();
        }

        public void Dispose()
        {
            Context.Dispose();

        }
    }
}
