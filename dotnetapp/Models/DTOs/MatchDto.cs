using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.DTOs;

public class CreateMatchDto
{
    [Required]
    public string Team1Name { get; set; } = string.Empty;

    [Required]
    public string Team2Name { get; set; } = string.Empty;

    [Required]
    public DateTime StartTime { get; set; }

    [Required]
    public string Venue { get; set; } = string.Empty;
}

public class MatchResponseDto
{
    public int Id { get; set; }
    public string Team1Name { get; set; } = string.Empty;
    public string Team2Name { get; set; } = string.Empty;
    public DateTime StartTime { get; set; }
    public string Venue { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public List<PlayerResponseDto> Players { get; set; } = new();
}
