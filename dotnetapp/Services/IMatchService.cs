using dotnetapp.Models.Entities;


namespace dotnetapp.Services
{
    public interface IMatchService
    {
        Task<Match> CreateMatch(Match match);
        Task<List<Match>> GetUpcomingMatches();
        Task<Match> GetMatchById(int matchId);
        Task UpdateMatch(Match match);
        Task<List<Player>> GetMatchPlayers(int matchId);
        Task AddPlayerToMatch(int matchId, Player player);
        Task UpdateMatchStatus(int matchId, string status);
    }
}
