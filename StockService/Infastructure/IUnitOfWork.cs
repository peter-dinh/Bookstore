using System;
using StockService.Models;
namespace StockService.Infastructure
{
    public interface IUnitOfWork : IDisposable
    {
        StockContext Context { get; }
        void Commit();
    }
}