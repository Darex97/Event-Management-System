using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Models
{
    //ovde sam dodao Identity
    public class EMSContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<Event> Events {get; set;}

        public DbSet<UserAdmin> UsersAdmins {get; set;}

        public DbSet<ConnectionEventUser> ConnectionEventUsers {get; set;}

        public DbSet<Category> Categories {get; set;}

        public DbSet<Review> Reviews {get; set;}

        public EMSContext()
        {

        }
        public EMSContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("EventManagementSystemCS");
            optionsBuilder.UseSqlServer(connectionString);
        }

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     base.OnModelCreating(modelBuilder);

        //     modelBuilder.Entity<UserAdmin>()
        //         .HasMany(p => p.CreatedEvents)
        //         .WithOne()
        //         .HasForeignKey(e => e.CreatorID);
        // }
    }
}