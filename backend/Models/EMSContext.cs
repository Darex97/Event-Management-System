using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class EMSContext : DbContext
    {
        public DbSet<Event> Events {get; set;}

        public DbSet<UserAdmin> UsersAdmins {get; set;}

        public DbSet<ConnectionEventUser> ConnectionEventUsers {get; set;}

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

        //     modelBuilder.Entity<ConnectionEventUser>()
        //         .HasOne(p => p.RegistratedUser)
        //         .WithMany()
        //         .WillCascadeOnDelete(false);
        // }
    }
}