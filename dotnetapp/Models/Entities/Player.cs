using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.Entities;

public class Player
{
    [Key]
    public int Id { get; set; }
    
    public int MatchId { get; set; }
    
    public Match Match { get; set; } = null!;
    
    [Required]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    public string Role { get; set; } = string.Empty;
    
    public string Team { get; set; } = string.Empty;
    
    public decimal Points { get; set; }
    
    public decimal Credits { get; set; }
    
    public List<PlayerSelection> TeamSelections { get; set; } = new();
}
