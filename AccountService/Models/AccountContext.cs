using System;
using Microsoft.EntityFrameworkCore;

namespace AccountService.Models
{
    public class AccountContext : DbContext
    {
        public AccountContext(DbContextOptions<AccountContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        }

        public DbSet<Account> Accounts {get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Account>()
            .Property(p => p.Id)
            .ValueGeneratedOnAdd();

        }
    } 
}