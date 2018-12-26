using Microsoft.EntityFrameworkCore;
using System;


namespace StockService.Models
{
    public class  StockContext : DbContext
    {
        public StockContext(DbContextOptions<StockContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        } 
        
        public DbSet<Receipt> Receipts { get; set; }
        public DbSet<ReceiptDetail> ReceiptDetails { get; set; }
        public DbSet<Account> Accounts {get; set;}
        public DbSet<Product> Products {get; set;}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Receipt>()
            .Property(p => p.Id)
            .ValueGeneratedOnAdd();
            builder.Entity<ReceiptDetail>()
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
        }
    }
}