using Microsoft.EntityFrameworkCore;
using System;


namespace ProductService.Models
{
    public class  ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        } 
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product_Category> Product_Categories { get; set; }
        public DbSet<Product_Image> Product_Images { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Account> Accounts {get; set;}
        public DbSet<Rating> Ratings {get; set;}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Product_Image>()
           .Property(p => p.Id)
           .ValueGeneratedOnAdd();
            builder.Entity<Image>()
           .Property(p => p.Id)
           .ValueGeneratedOnAdd();
            builder.Entity<Product>()
           .Property(p => p.Id)
           .ValueGeneratedOnAdd();
            builder.Entity<Product_Category>()
           .Property(p => p.Id)
           .ValueGeneratedOnAdd();
            builder.Entity<Category>()
            .Property(p => p.Id)
            .ValueGeneratedOnAdd();
            builder.Entity<Account>()
            .Property(p => p.Id)
            .ValueGeneratedOnAdd();
            builder.Entity<Account>()
            .HasIndex(p => p.Email)
            .IsUnique();
            builder.Entity<Rating>()
            .Property(p => p.Id)
            .ValueGeneratedOnAdd();
        }
    }
}