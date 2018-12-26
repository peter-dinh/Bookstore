using ProductService.Models;

namespace ProductService.Infastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        public ProductContext Context { get; }

        public UnitOfWork(ProductContext context)
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
