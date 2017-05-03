using AngularWebProject.Models;
using AngularWebProject.Models.Identity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularWebProject.Controllers
{
    public class IdentityController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public void CreateUser()
        {
            try
            {
                using (AppDbContext context = new AppDbContext())
                {
                    UserManager<AppUser> manager = new UserManager<AppUser>(new UserStore<AppUser>(context));
                    AppUser user = new AppUser();
                    user.Email = "jrc@123.com";
                    user.UserName = "jrcunningham21";
                    string password = "Code100%";

                    var result = manager.Create(user, password);
                    if (result.Succeeded)
                    {
                        result = manager.AddToRole(user.Id, "User");
                    }
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public void CreateRole()
        {
            using (AppDbContext _context = new AppDbContext())
            {
                RoleManager<AppRole> manager = new RoleManager<AppRole>(new RoleStore<AppRole>(_context));
                AppRole role = new AppRole
                {
                    Name = "User"
                };

                var result = manager.Create(role);
                if (result.Succeeded)
                {
                    //Success
                }
            }
        }
    }
}