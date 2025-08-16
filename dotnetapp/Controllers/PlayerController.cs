using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models.Entities;
using dotnetapp.Data;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayerController : ControllerBase
{
    private readonly AppDbContext _context;

    public PlayerController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("match/{matchId}")]
    public async Task<ActionResult<List<Player>>> GetPlayersByMatch(int matchId)
    {
        var players = await _context.Players
            .Where(p => p.MatchId == matchId)
            .ToListAsync();
        return Ok(players);
    }

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<Player>> CreatePlayer([FromBody] Player player)
    {
        _context.Players.Add(player);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetPlayer), new { id = player.Id }, player);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Player>> GetPlayer(int id)
    {
        var player = await _context.Players.FindAsync(id);
        if (player == null)
            return NotFound();
        return Ok(player);
    }

    [Authorize(Roles = "Admin")]
    [HttpPut("{id}")]
    public async Task<ActionResult> UpdatePlayer(int id, [FromBody] Player player)
    {
        if (id != player.Id)
            return BadRequest();

        _context.Entry(player).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [Authorize(Roles = "Admin")]
    [HttpPut("match/{matchId}/points")]
    public async Task<ActionResult> UpdatePlayerPoints(int matchId, [FromBody] List<PlayerPointsDto> playerPoints)
    {
        foreach (var pp in playerPoints)
        {
            var player = await _context.Players.FindAsync(pp.PlayerId);
            if (player != null && player.MatchId == matchId)
            {
                player.Points = pp.Points;
            }
        }
        await _context.SaveChangesAsync();
        return NoContent();
    }
}

public class PlayerPointsDto
{
    public int PlayerId { get; set; }
    public decimal Points { get; set; }
}
