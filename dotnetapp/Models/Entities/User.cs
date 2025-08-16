using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.Entities;

public class User
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    public string Username { get; set; } = string.Empty;
    
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    public string PasswordHash { get; set; } = string.Empty;
    
    public decimal WalletBalance { get; set; }
    
    public List<Team> Teams { get; set; } = new();
    
    public List<ContestParticipation> Participations { get; set; } = new();
}
