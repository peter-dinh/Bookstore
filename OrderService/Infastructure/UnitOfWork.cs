using OrderService.Models;

namespace OrderService.Infastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        public OrderContext Context { get; }

        public UnitOfWork(OrderContext context)
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
