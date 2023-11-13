using JWTAuthentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace backend.Controllers;
[Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
[ApiController]
[Route("[controller]")]
public class UserAdminController : ControllerBase
{
    public EMSContext Context {get; set;}

    
    private IConfiguration _config;
    public UserAdminController(EMSContext context,
    IConfiguration config)
    {
        Context= context;
        _config = config;
    }

    //Cisto za proveru podataka u bazi
    //[Authorize(Roles = UserRoles.User)]
    [AllowAnonymous]
    [Route("GetUSers")]
    [HttpGet]
    public ActionResult GetUsers()
    {
        //eager loading
        var users = Context.UsersAdmins//.ToList();
                    .Include(p=>p.CreatedEvents).ToList();
                   // .ThenInclude(q=>q.ID);


        
        return Ok(users);
    }

    [Authorize(Roles = UserRoles.User)]
    [Route("GetUSersAuth")]
    [HttpGet]
    public ActionResult GetUSersAuth()
    {
        //eager loading
        var users = Context.UsersAdmins//.ToList();
                    .Include(p=>p.CreatedEvents).ToList();
                   // .ThenInclude(q=>q.ID);


        
        return Ok(users);
    }

    //[Authorize(Roles = UserRoles.User)]
    [Route("GetUserEvents/{idUser}")]
    [AllowAnonymous]
    [HttpGet]
    public ActionResult GetUserEvents(int idUser)
    {
        //eager loading
        var users = Context.UsersAdmins.Where(q=> q.ID==idUser)//.ToList();
                    .Include(p=>p.CreatedEvents).ToList();
                   // .ThenInclude(q=>q.ID);


        
        return Ok(users);
    }

    [AllowAnonymous]
    [Route("GetUSers/{username}")]
    [HttpGet]
    public ActionResult GetUsersIdAsync(string username)
    {
        var user = Context.UsersAdmins
            .Where(e => e.Username==username)
            .Include(p => p.CreatedEvents);
           
            return Ok(user);


        
        
    }
    

    [Route("AddUser")]
    [HttpPost]
    [AllowAnonymous]
    public async Task<ActionResult> AddUser([FromBody] UserAdmin userAdmin)
    {
        try
        {
            Context.UsersAdmins.Add(userAdmin);
            await Context.SaveChangesAsync();
            return Ok();
        }
        catch(Exception e)
        {
            return BadRequest(e.Message);
        }
        
        
    }
}
