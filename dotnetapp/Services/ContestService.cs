using dotnetapp.Data;
using dotnetapp.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Services
{
    public class ContestService : IContestService
    {
        private readonly AppDbContext _context;

        public ContestService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Contest> CreateContest(Contest contest)
        {
            _context.Contests.Add(contest);
            await _context.SaveChangesAsync();
            return contest;
        }

        public async Task<List<Contest>> GetContestsByMatch(int matchId)
        {
            return await _context.Contests
                .Where(c => c.MatchId == matchId)
                .ToListAsync();
        }

        public async Task<Contest> GetContestById(int contestId)
        {
            return await _context.Contests
                .FindAsync(contestId);
        }

        public async Task<ContestParticipation> JoinContest(int userId, int contestId, int teamId)
        {
            var participation = new ContestParticipation
            {
                UserId = userId,
                // ...existing code...
            };
            // ...existing code...
        }
        // ...existing code...
    }
}
                ContestId = contestId,
                TeamId = teamId
            };
            _context.ContestParticipations.Add(participation);
            await _context.SaveChangesAsync();
            return participation;
        }

        public async Task<List<ContestParticipation>> GetUserParticipations(int userId)
        {
            return await _context.ContestParticipations
                .Where(p => p.UserId == userId)
                .Include(p => p.Contest)
                .ToListAsync();
        }

        public async Task<List<ContestParticipation>> GetContestLeaderboard(int contestId)
        {
            return await _context.ContestParticipations
                .Where(p => p.ContestId == contestId)
                .OrderByDescending(p => p.Points)
                .Include(p => p.User)
                .ToListAsync();
        }

        public async Task UpdatePoints(int contestId)
        {
            // This would involve complex logic to calculate points based on player performance
            // For now, just a placeholder
            var participations = await _context.ContestParticipations
                .Where(p => p.ContestId == contestId)
                .ToListAsync();
            
            foreach (var participation in participations)
            {
                // Add point calculation logic here
                participation.Points = 0; // Placeholder
            }

            await _context.SaveChangesAsync();
        }

        public async Task DistributePrizes(int contestId)
        {
            // This would involve updating user wallets based on contest rank and prize distribution
            // For now, just a placeholder
            var leaderboard = await GetContestLeaderboard(contestId);
            
            // Add prize distribution logic here
            
            await _context.SaveChangesAsync();
        }
    }
}
