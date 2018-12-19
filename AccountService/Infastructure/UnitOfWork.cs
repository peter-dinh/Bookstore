using AccountService.Models;

namespace AccountService.Infastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        public AccountContext Context { get; }

        public UnitOfWork(AccountContext context)
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
