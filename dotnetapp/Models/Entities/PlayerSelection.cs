using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.Entities;

public class PlayerSelection
{
    [Key]
    public int Id { get; set; }
    
    public int TeamId { get; set; }
    
    public Team Team { get; set; } = null!;
    
    public int PlayerId { get; set; }
    
    public Player Player { get; set; } = null!;
}
