using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class UserAdminController : ControllerBase
{
    public EMSContext Context {get; set;}

    public UserAdminController(EMSContext context)
    {
        Context= context;
    }

    //Cisto za proveru podataka u bazi
    [Route("GetUSers")]
    [HttpGet]
    public ActionResult GetUsers()
    {
        //eager loading
        var users = Context.UsersAdmins.ToList();
                    //.Include(p=>p.CreatedEvents)
                   // .ThenInclude(q=>q.ID);


        
        return Ok(users);
    }

    [Route("AddUser")]
    [HttpPost]
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
