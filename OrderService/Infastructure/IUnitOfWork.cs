using System;
using OrderService.Models;
namespace OrderService.Infastructure
{
    public interface IUnitOfWork : IDisposable
    {
        OrderContext Context { get; }
        void Commit();
    }
}