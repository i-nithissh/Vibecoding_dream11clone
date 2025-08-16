using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.Entities;

public class PrizeDistribution
{
    [Key]
    public int Id { get; set; }
    
    public int ContestId { get; set; }
    
    public Contest Contest { get; set; } = null!;
    
    public string Rank { get; set; } = string.Empty;
    
    public decimal Prize { get; set; }
}
