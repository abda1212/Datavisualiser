using Microsoft.EntityFrameworkCore;

namespace Assignments.Models
{
    public class EmployeDb: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Sale> Sales { get; set; }
        public EmployeDb(DbContextOptions options) : base(options)
        { }

    }
}
