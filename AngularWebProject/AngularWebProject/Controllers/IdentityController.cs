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
        //[HttpGet]
        //public JsonResult GetUsers()
        //{
        //    using (var _db = new AppDbContext())
        //    {
        //        var users = _db.Users.Select(x => new { x.Email, x.Id, x.UserName, x.Roles }).ToList();
        //        return Json(users, JsonRequestBehavior.AllowGet);
        //    }            
        //}
        //[HttpGet]
        //public JsonResult GetRoles()
        //{
        //    using (var _db = new AppDbContext())
        //    {
        //        var roles = _db.Roles.Select(x => new { x.Name, x.Id }).ToList();
        //        return Json(roles, JsonRequestBehavior.AllowGet);
        //    }
        //}
        //[HttpPost]
        //public void CreateUser(AppUser user, string password)
        //{
        //    try
        //    {
        //        using (AppDbContext context = new AppDbContext())
        //        {
        //            UserManager<AppUser> manager = new UserManager<AppUser>(new UserStore<AppUser>(context));

        //            var result = manager.Create(user, password);
        //            if (result.Succeeded)
        //            {
        //                result = manager.AddToRole(user.Id, "User");
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw;
        //    }
        //}
        //[HttpPost]
        //public void CreateRole(string roleName)
        //{
        //    using (AppDbContext _context = new AppDbContext())
        //    {
        //        RoleManager<AppRole> manager = new RoleManager<AppRole>(new RoleStore<AppRole>(_context));
        //        AppRole role = new AppRole
        //        {
        //            Name = roleName
        //        };

        //        var result = manager.Create(role);
        //        if (result.Succeeded)
        //        {
        //            //Success
        //        }
        //    }
        //}
        //[HttpPost]
        //public void AddUserToRole(AppUser user, string roleName)
        //{
        //    using (AppDbContext _context = new AppDbContext())
        //    {
        //        UserManager<AppUser> manager = new UserManager<AppUser>(new UserStore<AppUser>(_context));
        //        var result = manager.AddToRole(user.Id, roleName);
                
        //        if (result.Succeeded)
        //        {
        //            //Success
        //        }
        //    }
        //}
    }
}