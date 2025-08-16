using dotnetapp.Models.Entities;

namespace dotnetapp.Services
{
    public interface ITeamService
    {
        Task<Team> CreateTeam(int userId, int matchId, string name, List<PlayerSelection> players, int captainId, int viceCaptainId);
        Task<List<Team>> GetUserTeams(int userId);
        Task<Team> GetTeamById(int teamId);
        Task<List<Team>> GetTeamsByMatch(int matchId);
        Task UpdateTeam(Team team);
        Task DeleteTeam(int teamId);
    }
}
