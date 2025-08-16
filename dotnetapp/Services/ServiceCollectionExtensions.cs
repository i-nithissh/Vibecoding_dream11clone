
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using dotnetapp.Data;
using dotnetapp.Models.Entities;
using dotnetapp.Services;


namespace dotnetapp.Services

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddScoped<IAuthService>(sp => 
            new AuthService(
                sp.GetRequiredService<AppDbContext>(), 
                sp.GetRequiredService<IConfiguration>()));

        services.AddScoped<ITeamService>(sp => 
            new TeamService(sp.GetRequiredService<AppDbContext>()));

        services.AddScoped<IMatchService>(sp => 
            new MatchService(sp.GetRequiredService<AppDbContext>()));

        services.AddScoped<IContestService>(sp => 
            new ContestService(sp.GetRequiredService<AppDbContext>()));

        return services;
    }
}
