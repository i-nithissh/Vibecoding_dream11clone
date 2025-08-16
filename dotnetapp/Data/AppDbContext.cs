using Microsoft.EntityFrameworkCore;
using dotnetapp.Models.Entities;

namespace dotnetapp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<Contest> Contests { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<ContestParticipation> ContestParticipations { get; set; }
        public DbSet<PrizeDistribution> PrizeDistributions { get; set; }
        public DbSet<PlayerSelection> PlayerSelections { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure relationships and constraints
            modelBuilder.Entity<Team>()
                .HasOne(t => t.User)
                .WithMany(u => u.Teams)
                .HasForeignKey(t => t.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<ContestParticipation>()
                .HasOne(cp => cp.User)
                .WithMany(u => u.Participations)
                .HasForeignKey(cp => cp.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ContestParticipation>()
                .HasOne(cp => cp.Contest)
                .WithMany(c => c.Participations)
                .HasForeignKey(cp => cp.ContestId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<PrizeDistribution>()
                .HasOne(pd => pd.Contest)
                .WithMany(c => c.PrizeDistribution)
                .HasForeignKey(pd => pd.ContestId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
