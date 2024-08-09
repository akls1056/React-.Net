using System.ComponentModel.DataAnnotations;

namespace MyDotNetBackend.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public Role Role { get; set; } = Role.User;  // Varsayılan olarak 'User' rolü atanır
    }
}
