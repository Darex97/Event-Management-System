using JWTAuthentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Models;

namespace backend.Controllers;
[Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
[ApiController]
[Route("[controller]")]
public class UserAdminController : ControllerBase
{
    public EMSContext Context { get; set; }

    private IConfiguration _config;
    public UserAdminController(EMSContext context,
    IConfiguration config)
    {
        Context = context;
        
        _config = config;
    }

    //Za signup nema autorizacije
    //[Authorize(Roles = UserRoles.User)]
    [AllowAnonymous]
    [Route("GetUSers")]
    [HttpGet]
    public ActionResult GetUsers()
    {
        //eager loading
        var users = Context.UsersAdmins//.ToList();
                    .Include(p => p.CreatedEvents)
                    .ThenInclude(q => q.Categories)
                    .ToList();
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
                    .Include(p => p.CreatedEvents)
                    .ThenInclude(q => q.Categories)
                    .ToList();
        // .ThenInclude(q=>q.ID);



        return Ok(users);
    }

    //[Authorize(Roles = UserRoles.User)]
    [Route("GetUserEvents/{idUser}")]
    //[AllowAnonymous]
    [HttpGet]
    public ActionResult GetUserEvents(int idUser)
    {
        //eager loading
        var users = Context.UsersAdmins.Where(q => q.ID == idUser)//.ToList();
                    .Include(p => p.CreatedEvents)
                    .ThenInclude(q=> q.Categories).ToList();
        // .ThenInclude(q=>q.ID);



        return Ok(users);
    }

    [AllowAnonymous]
    [Route("GetUSers/{username}")]
    [HttpGet]
    public ActionResult GetUsersIdAsync(string username)
    {
        var user = Context.UsersAdmins
            .Where(e => e.Username == username)
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
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }


    }

    [Route("ChangeUser/{idUser}/{firstName}/{lastName}/{city}/{email}/{gender}/{picturePath}")]
    [HttpPut]
    //[AllowAnonymous]
    public async Task<ActionResult> ChangeUser(int idUser,string firstName,string lastName,string city,string email,string gender,string picturePath)
    {
        //var strucnoLiceA = Context.StrucnaLIca.Where(p => p.ID == idStrucnjaka).FirstOrDefault();

        var user2 = Context.UsersAdmins.Where(p => p.ID == idUser).FirstOrDefault();
        if (user2 == null)
        {
            return BadRequest("User ne postoji");
        }
        try
        {
            var userForChange = await Context.UsersAdmins.FindAsync(idUser);
            //UserAdmin Creator2 = Context.UsersAdmins.Where(p => p.ID == 7).FirstOrDefault();


            userForChange.FirstName = firstName;
            userForChange.LastName = lastName;
            userForChange.City = city;
            userForChange.Email = email;
            userForChange.Gender = gender;
            userForChange.PicturePath = picturePath;

            await Context.SaveChangesAsync();
            return Ok();
        }

        catch (Exception e)
        {
            return BadRequest(e.Message);
        }

    }

    [Route("ChangeUserFromBody")]
    [HttpPut]
    //[AllowAnonymous]
    public async Task<ActionResult> ChangeUserFromBody([FromBody] UserAdmin model)
    {
        //var strucnoLiceA = Context.StrucnaLIca.Where(p => p.ID == idStrucnjaka).FirstOrDefault();

        var user2 = Context.UsersAdmins.Where(p => p.ID == model.ID).FirstOrDefault();
        if (user2 == null)
        {
            return BadRequest("User ne postoji");
        }
        try
        {
            var userForChange = await Context.UsersAdmins.FindAsync(model.ID);
            //UserAdmin Creator2 = Context.UsersAdmins.Where(p => p.ID == 7).FirstOrDefault();


            userForChange.FirstName = model.FirstName;
            userForChange.LastName = model.LastName;
            userForChange.City = model.City;
            userForChange.Email = model.Email;
            userForChange.Gender = model.Gender;
            userForChange.PicturePath = model.PicturePath;

            await Context.SaveChangesAsync();
            return Ok();
        }

        catch (Exception e)
        {
            return BadRequest(e.Message);
        }

    }

        [Authorize(Roles = UserRoles.Admin)]
        [Route("DeleteUser/{id}")]
        [HttpDelete]
        public async Task<ActionResult> DeleteUser(int id)
        {
            //var strucnoLiceA = Context.UsersAdmins.Where(p => p.ID == idUser).FirstOrDefault();
            
            var user2 = Context.UsersAdmins.Where(p => p.ID == id).FirstOrDefault();
            if (user2 == null)
            {
                return BadRequest("Event ne postoji");
            }
            try
            {
                var user1 = await Context.UsersAdmins.FindAsync(user2.ID);
                Context.UsersAdmins.Remove(user1);

                //skoro dodato
                var events = await Context.Events.Where(p=> p.Creator.ID == id).ToListAsync();
                events.ForEach(p =>{ 
                        Context.Events.Remove(p);

                });
                //

                
                await Context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }
}
