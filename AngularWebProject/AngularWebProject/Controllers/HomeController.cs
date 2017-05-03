using AngularWebProject.Models;
using AngularWebProject.Models.Identity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System;
using System.Web;
using System.Web.Mvc;


namespace AngularWebProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //CreateRole("User");
            //CreateUser();
            return View();
        }


        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Login(LoginViewModel login)
        {
            if (ModelState.IsValid)
            {
                var userManager = HttpContext.GetOwinContext().GetUserManager<AppUserManager>();
                var authManager = HttpContext.GetOwinContext().Authentication;

                AppUser user = userManager.Find(login.Email, login.Password);
                if (user != null)
                {
                    var ident = userManager.CreateIdentity(user,
                        DefaultAuthenticationTypes.ApplicationCookie);
                    authManager.SignIn(
                        new AuthenticationProperties { IsPersistent = false }, ident);
                    return Redirect(Url.Action("Index", "Home"));
                }
            }
            ModelState.AddModelError("", "Invalid username or password");
            return View(login);
        }

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

        public void CreateRole(string roleName)
        {
            var roleManager = HttpContext.GetOwinContext().GetUserManager<RoleManager<AppRole>>();

            if (!roleManager.RoleExists(roleName))
                roleManager.Create(new AppRole(roleName));
            // rest of code
        }
    }
}