using Microsoft.EntityFrameworkCore;
using OrderService.Models;
using System;


namespace OrderService.Models
{
    public class  OrderContext : DbContext
    {
        public OrderContext(DbContextOptions<OrderContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        } 

        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Account> Accounts {get; set;}
        public DbSet<Product> Products {get; set;}
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<OrderItem>()
           .Property(p => p.Id)
           .ValueGeneratedOnAdd();
            builder.Entity<Order>()
           .Property(p => p.Id)
           .ValueGeneratedOnAdd();
            builder.Entity<Account>()
           .Property(p => p.Id)
           .ValueGeneratedOnAdd();
            builder.Entity<Account>()
            .HasIndex(p => p.Email)
            .IsUnique();
            builder.Entity<Product>()
           .Property(p => p.Id)
           .ValueGeneratedOnAdd();
            builder.Entity<Product>()
            .HasIndex(p => p.ProductID)
            .IsUnique();
        }
    }
}