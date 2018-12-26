using System;
using ProductService.Models;
namespace ProductService.Infastructure
{
    public interface IUnitOfWork : IDisposable
    {
        ProductContext Context { get; }
        void Commit();
    }
}