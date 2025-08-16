using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models.DTOs;

public class CreateContestDto
{
    [Required]
    public int MatchId { get; set; }

    [Required]
    [Range(2, 10000)]
    public int EntryFee { get; set; }

    [Required]
    [Range(2, 1000000)]
    public int TotalPrize { get; set; }

    [Required]
    [Range(2, 10000)]
    public int MaxParticipants { get; set; }
}

public class ContestResponseDto
{
    public int Id { get; set; }
    public int MatchId { get; set; }
    public int EntryFee { get; set; }
    public int TotalPrize { get; set; }
    public int MaxParticipants { get; set; }
    public int CurrentParticipants { get; set; }
    public bool IsFull => CurrentParticipants >= MaxParticipants;
    public List<PrizeDistributionDto> PrizeDistribution { get; set; } = new();
}
