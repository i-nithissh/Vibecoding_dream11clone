using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.Entities;

public class ContestParticipation
{
    [Key]
    public int Id { get; set; }
    
    public int UserId { get; set; }
    
    public User User { get; set; } = null!;
    
    public int ContestId { get; set; }
    
    public Contest Contest { get; set; } = null!;
    
    public int TeamId { get; set; }
    
    public Team Team { get; set; } = null!;
    
    public int? Rank { get; set; }
    
    public decimal? PrizeWon { get; set; }
    
    public decimal Points { get; set; }
}
