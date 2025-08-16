using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.Entities;

public class Match
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    public string Team1 { get; set; } = string.Empty;
    
    [Required]
    public string Team2 { get; set; } = string.Empty;
    
    [Required]
    public DateTime MatchTime { get; set; }
    
    public string Venue { get; set; } = string.Empty;
    
    public string Status { get; set; } = string.Empty;
    
    public List<Player> Players { get; set; } = new();
    
    public List<Contest> Contests { get; set; } = new();
}
