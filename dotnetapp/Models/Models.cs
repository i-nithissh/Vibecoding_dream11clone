using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string PasswordHash { get; set; }
        public decimal WalletBalance { get; set; }
        public List<Team> Teams { get; set; }
        public List<ContestParticipation> Participations { get; set; }
    }

    public class Match
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Team1 { get; set; }
        [Required]
        public string Team2 { get; set; }
        [Required]
        public DateTime MatchTime { get; set; }
        public string Venue { get; set; }
        public string Status { get; set; }
        public List<Player> Players { get; set; }
        public List<Contest> Contests { get; set; }
    }

    public class Contest
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; }
        [Required]
        public decimal EntryFee { get; set; }
        [Required]
        public decimal PrizePool { get; set; }
        [Required]
        public int TotalSpots { get; set; }
        public int FilledSpots { get; set; }
        public float WinnerPercentage { get; set; }
        public List<PrizeDistribution> PrizeDistribution { get; set; }
        public List<ContestParticipation> Participations { get; set; }
    }

    public class PrizeDistribution
    {
        [Key]
        public int Id { get; set; }
        public int ContestId { get; set; }
        public Contest Contest { get; set; }
        public string Rank { get; set; }
        public decimal Prize { get; set; }
    }

    public class Team
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; }
        [Required]
        public string Name { get; set; }
        public List<PlayerSelection> Players { get; set; }
        public int CaptainId { get; set; }
        public int ViceCaptainId { get; set; }
    }

    public class Player
    {
        [Key]
        public int Id { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Role { get; set; }
        public string Team { get; set; }
        public decimal Points { get; set; }
        public decimal Credits { get; set; }
        public List<PlayerSelection> TeamSelections { get; set; }
    }

    public class PlayerSelection
    {
        [Key]
        public int Id { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; }
        public int PlayerId { get; set; }
        public Player Player { get; set; }
    }

    public class ContestParticipation
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int ContestId { get; set; }
        public Contest Contest { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; }
        public int? Rank { get; set; }
        public decimal? PrizeWon { get; set; }
        public decimal Points { get; set; }
    }
}
