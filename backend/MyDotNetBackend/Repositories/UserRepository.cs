using MyDotNetBackend.Models;
using System.Collections.Generic;
using System.Linq;

namespace MyDotNetBackend.Repositories
{
    public class UserRepository
    {
        private static readonly List<User> Users = new List<User>();

        public User AddUser(User user)
        {
            user.Id = Users.Count + 1;
            Users.Add(user);
            return user;
        }

        public User GetUser(string email, string password)
        {
            return Users.FirstOrDefault(u => u.Email == email && u.Password == password);
        }

        public User GetUserByEmail(string email)
        {
            return Users.FirstOrDefault(u => u.Email == email);
        }
    }
}
