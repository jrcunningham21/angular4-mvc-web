using AngularWebProject.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace AngularWebProject.Api.Controllers
{
    [Authorize]
    [RoutePrefix("api/Users")]
    public class UsersController : ApiController
    {
        [HttpGet]
        [Route("Get")]
        public IHttpActionResult GetUsers()
        {
            using (var _db = new ApplicationDbContext())
            {
                var users = _db.Users.Select(x => new { x.Email, x.Id, x.UserName, x.Roles }).ToList();
                return Json(users);
            }
        }
    }
}
