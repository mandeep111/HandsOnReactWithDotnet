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
    }
}
