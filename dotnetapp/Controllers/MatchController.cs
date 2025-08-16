using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models.Entities;
using dotnetapp.Services;

namespace dotnetapp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MatchController : ControllerBase
{
    private readonly IMatchService _matchService;

    public MatchController(IMatchService matchService)
    {
        _matchService = matchService;
    }

    [HttpGet]
    public async Task<ActionResult<List<Match>>> GetUpcomingMatches()
    {
        var matches = await _matchService.GetUpcomingMatches();
        return Ok(matches);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Match>> GetMatch(int id)
    {
        var match = await _matchService.GetMatchById(id);
        if (match == null)
            return NotFound();
        return Ok(match);
    }

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<Match>> CreateMatch([FromBody] Match match)
    {
        var created = await _matchService.CreateMatch(match);
        return CreatedAtAction(nameof(GetMatch), new { id = created.Id }, created);
    }

    [Authorize(Roles = "Admin")]
    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateMatch(int id, [FromBody] Match match)
    {
        if (id != match.Id)
            return BadRequest();

        await _matchService.UpdateMatch(match);
        return NoContent();
    }
}
