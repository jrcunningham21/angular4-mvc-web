using AngularWebProject.Api.Models;
using AngularWebProject.Api.Models.Identity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace AngularWebProject.Api.Controllers
{
    //[Authorize]
    [RoutePrefix("api/Users")]
    public class UsersController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetUsers()
        {
            using (var _db = new ApplicationDbContext())
            {
                var users = _db.Users.Select(x => new { x.Email, x.Id, x.UserName, x.Roles }).ToList();
                return Json(users);
            }
        }

        [HttpGet]
        public IHttpActionResult GetRoles()
        {
            using (var _db = new ApplicationDbContext())
            {
                var roles = _db.Roles.Select(x => new { x.Name, x.Id }).ToList();
                return Json(roles);
            }
        }
        public class UserModel
        {
            public string email { get; set; }
            public string username { get; set; }
            public string password { get; set; }
        }

        [HttpPost]
        public IHttpActionResult CreateUser([FromBody]UserModel model)
        {                 
            try
            {
                ApplicationUser user = new ApplicationUser();
                user.Email = model.email;
                user.UserName = model.username;

                string password = model.password;
                
                using (ApplicationDbContext context = new ApplicationDbContext())
                {
                    UserManager<ApplicationUser> manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));

                    var result = manager.Create(user, password);
                    if (result.Succeeded)
                    {
                        //Success
                        return Ok();
                    }

                    return InternalServerError();
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public class RoleModel
        {
            public string roleName { get; set; }
        }
        [HttpPost]
        public IHttpActionResult CreateRole([FromBody]RoleModel roleModel)
        {
            using (ApplicationDbContext _context = new ApplicationDbContext())
            {
                RoleManager<AppRole> manager = new RoleManager<AppRole>(new RoleStore<AppRole>(_context));
                AppRole role = new AppRole
                {
                    Name = roleModel.roleName
                };

                var result = manager.Create(role);
                if (result.Succeeded)
                {
                    //Success
                    return Ok();
                }
                else
                    return InternalServerError();
            }
        }
        [HttpPost]
        public void AddUserToRole(ApplicationUser user, string roleName)
        {
            using (ApplicationDbContext _context = new ApplicationDbContext())
            {
                UserManager<ApplicationUser> manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(_context));
                var result = manager.AddToRole(user.Id, roleName);

                if (result.Succeeded)
                {
                    //Success
                }
            }
        }
    }
}
