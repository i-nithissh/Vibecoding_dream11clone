using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.Entities;

public class Contest
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    public string Name { get; set; } = string.Empty;
    
    public int MatchId { get; set; }
    
    public Match Match { get; set; } = null!;
    
    [Required]
    public decimal EntryFee { get; set; }
    
    [Required]
    public decimal PrizePool { get; set; }
    
    [Required]
    public int TotalSpots { get; set; }
    
    public int FilledSpots { get; set; }
    
    public float WinnerPercentage { get; set; }
    
    public List<PrizeDistribution> PrizeDistribution { get; set; } = new();
    
    public List<ContestParticipation> Participations { get; set; } = new();
}
