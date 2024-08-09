using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MyDotNetBackend.Data;
using MyDotNetBackend.Models;
using MyDotNetBackend.Repositories;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace MyDotNetBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly UserRepository _userRepository;

        public AuthController(IConfiguration configuration, ApplicationDbContext context)
        {
            _configuration = configuration;
            _userRepository = new UserRepository(context);
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            if (_userRepository.GetUserByEmail(user.Email) != null)
            {
                return BadRequest("User already exists.");
            }

            var newUser = _userRepository.AddUser(user);
            return Ok(newUser);
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            var existingUser = _userRepository.GetUser(user.Email, user.Password);
            if (existingUser == null)
            {
                return Unauthorized("Invalid credentials.");
            }
        
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Role, existingUser.Role.ToString())  // Kullanıcının rolü token'a ekleniyor
            };
        
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);
        
            return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
        }




        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            return Ok(_userRepository.GetAllUsers());
        }
        
        [Authorize(Roles = "Admin")]
        [HttpGet("admin/users")]
        public IActionResult GetAllUsers()
        {
            return Ok(_userRepository.GetAllUsers());
        }
    }
}
