using dotnetapp.Data;
using dotnetapp.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Services
{
    public class TeamService : ITeamService
    {
        private readonly AppDbContext _context;

        public TeamService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Team> CreateTeam(int userId, int matchId, string name, List<PlayerSelection> players, int captainId, int viceCaptainId)
        {
            var user = await _context.Users.FindAsync(userId);
            var match = await _context.Matches.FindAsync(matchId);

            if (user == null || match == null)
            {
                throw new Exception("User or Match not found");
            }

            var team = new Team
            {
                UserId = userId,
                MatchId = matchId,
                Name = name,
                Players = players,
                CaptainId = captainId,
                ViceCaptainId = viceCaptainId
            };

            _context.Teams.Add(team);
            await _context.SaveChangesAsync();

            return team;
        }
        // ...existing code...
    }
}

    public async Task<List<Team>> GetUserTeams(int userId)
    {
        return await _context.Teams
            .Include(t => t.User)
            .Include(t => t.Match)
            .Include(t => t.Players)
            .ThenInclude(p => p.Player)
            .Where(t => t.UserId == userId)
            .ToListAsync();
    }

    public async Task<Team> GetTeamById(int teamId)
    {
        var team = await _context.Teams
            .Include(t => t.User)
            .Include(t => t.Match)
            .Include(t => t.Players)
            .ThenInclude(p => p.Player)
            .FirstOrDefaultAsync(t => t.Id == teamId);

        if (team == null)
        {
            throw new Exception("Team not found");
        }

        return team;
    }

    public async Task<List<Team>> GetTeamsByMatch(int matchId)
    {
        return await _context.Teams
            .Include(t => t.User)
            .Include(t => t.Players)
            .ThenInclude(p => p.Player)
            .Where(t => t.MatchId == matchId)
            .ToListAsync();
    }

    public async Task UpdateTeam(Team team)
    {
        _context.Teams.Update(team);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteTeam(int teamId)
    {
        var team = await _context.Teams.FindAsync(teamId);
        if (team == null)
        {
            throw new Exception("Team not found");
        }

        _context.Teams.Remove(team);
        await _context.SaveChangesAsync();
    }
}