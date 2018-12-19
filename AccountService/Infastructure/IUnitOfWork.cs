using System;
using AccountService.Models;
namespace AccountService.Infastructure
{
    public interface IUnitOfWork : IDisposable
    {
        AccountContext Context { get; }
        void Commit();
    }
}