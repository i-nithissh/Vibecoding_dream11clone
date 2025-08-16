using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.Entities;

public class Team
{
    [Key]
    public int Id { get; set; }
    
    public int UserId { get; set; }
    
    public User User { get; set; } = null!;
    
    public int MatchId { get; set; }
    
    public Match Match { get; set; } = null!;
    
    [Required]
    public string Name { get; set; } = string.Empty;
    
    public List<PlayerSelection> Players { get; set; } = new();
    
    public int CaptainId { get; set; }
    
    public int ViceCaptainId { get; set; }
}
