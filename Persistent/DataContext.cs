using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistent
{   
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Value> Values { get; set; }

        protected override void OnModelCreating(ModelBuilder model) 
        {
            model.Entity<Value>()
            .HasData(
                new Value{Id=1, Name="Ram"},
                new Value{Id=2, Name="Hari"},
                new Value{Id=3, Name="Shyam"}
            );
        }
    }
}
