using dotnetapp.Models.Entities;


namespace dotnetapp.Services
{
    public interface IAuthService
    {
        Task<User> RegisterUser(string username, string email, string password);
        Task<string> Login(string email, string password);
        Task<User> GetUserById(int userId);
        Task UpdateUserBalance(int userId, decimal amount);
        Task<User> GetUserByEmail(string email);
    }
}
