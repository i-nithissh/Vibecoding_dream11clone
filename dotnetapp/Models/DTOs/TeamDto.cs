using System.ComponentModel.DataAnnotations;
using dotnetapp.Models.Entities;

namespace dotnetapp.Models.DTOs;

public class CreateTeamDto
{
    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    public int MatchId { get; set; }

    [Required]
    public List<int> PlayerIds { get; set; } = new();

    [Required]
    public int CaptainId { get; set; }

    [Required]
    public int ViceCaptainId { get; set; }
}

public class TeamResponseDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int MatchId { get; set; }
    public List<Player> Players { get; set; } = new();
    public int CaptainId { get; set; }
    public int ViceCaptainId { get; set; }
}
