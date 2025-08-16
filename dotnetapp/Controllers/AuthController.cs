using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models.Entities;
using dotnetapp.Services;

namespace dotnetapp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }


    [HttpPost("register")]
    public async Task<ActionResult<User>> Register([FromBody] User user)
    {
        try
        {
            var createdUser = await _authService.RegisterUser(user.Username, user.Email, user.PasswordHash);
            return Ok(createdUser);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPost("login")]
    public async Task<ActionResult<string>> Login([FromBody] User user)
    {
        try
        {
            var token = await _authService.Login(user.Email, user.PasswordHash);
            return Ok(new { token });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [Authorize]
    [HttpGet("me")]
    public async Task<ActionResult<User>> GetCurrentUser()
    {
        var userId = int.Parse(User.FindFirst("userId")?.Value ?? "0");
        var user = await _authService.GetUserById(userId);
        if (user == null)
            return NotFound();
        return Ok(user);
    }
}


