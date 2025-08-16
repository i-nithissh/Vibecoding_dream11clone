namespace dotnetapp.Models.DTOs;

public class PlayerResponseDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Team { get; set; } = string.Empty;
    public int Points { get; set; }
    public decimal Credits { get; set; }
}

public class CreatePlayerDto
{
    public string Name { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Team { get; set; } = string.Empty;
    public decimal Credits { get; set; }
}
