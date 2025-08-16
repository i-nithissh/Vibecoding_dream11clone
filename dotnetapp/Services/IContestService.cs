using dotnetapp.Models.Entities;

namespace dotnetapp.Services
{
    public interface IContestService
    {
        Task<Contest> CreateContest(Contest contest);
        Task<List<Contest>> GetContestsByMatch(int matchId);
        Task<Contest> GetContestById(int contestId);
        Task<ContestParticipation> JoinContest(int userId, int contestId, int teamId);
        Task<List<ContestParticipation>> GetUserParticipations(int userId);
        Task<List<ContestParticipation>> GetContestLeaderboard(int contestId);
        Task UpdatePoints(int contestId);
        Task DistributePrizes(int contestId);
    }
}
