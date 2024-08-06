using MyDotNetBackend.Data;
using MyDotNetBackend.Models;
using System.Linq;

namespace MyDotNetBackend.Repositories
{
    public class UserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public User AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public User? GetUser(string email, string password)  // Null olasılığını belirtmek için ? ekledik
        {
            return _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
        }

        public User? GetUserByEmail(string email)  // Null olasılığını belirtmek için ? ekledik
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        public List<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }
    }
}
