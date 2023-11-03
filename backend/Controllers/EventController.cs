using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace backend.Controllers;

[Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
[ApiController]
[Route("[controller]")]
public class EventController : ControllerBase
{
    public EMSContext Context {get; set;}

    public EventController(EMSContext context)
    {
        Context= context;
    }

    //Cisto za proveru baze
    [Route("GetEventbyId/id")]
    [AllowAnonymous]
    [HttpGet]
    public ActionResult GetEventbyId(int id)
    {
        var events = Context.Events.Where(p=> p.ID == id)
                                   .Include(p=> p.RegistredUsers);
        

            
           
        return Ok(events);
    }

    [Route("GetAllEvents")]
    [AllowAnonymous]
    [HttpGet]
    public ActionResult GetAllEvents()
    {
        var events = Context.Events;
        

            
           
        return Ok(events);
    }


    [Route("GetAllEventsWithRegistratedUsers")]
    [AllowAnonymous]
    [HttpGet]
    public ActionResult GetAllEventsWithRegistratedUsers()
    {
    var events = Context.Events.Include(p=> p.RegistredUsers);
            

            
           
        return Ok(events);
    }

  
    [AllowAnonymous] // izmeni posle na korisnika i admina
    [Route("AddEvent/Name/Date/Time/Place/Categories/LongDescribe/ShortDescribe/PicturePath/CreatorId")] 
    [HttpPost]
    public async Task<ActionResult> AddEvent (string name,string date,string time,string place,string categories,string longDes,string shortDes,string picturePath, int creatorId)
    {
        try
        {
            

            var event2 = Context.Events.Where(p => p.Name == name).FirstOrDefault();
            if (event2 != null)
            {
                return BadRequest("Event exist");
            }     

            UserAdmin Creator = await Context.UsersAdmins.FindAsync(creatorId);
               
            Event event1 = new Event();
            event1.Name = name;
            event1.Date = date;
            event1.Time = time;
            event1.Place = place;
            event1.Categories = categories;
            event1.LongDescribe = longDes;
            event1.ShortDescribe = shortDes;
            event1.PicturePath = picturePath;
            event1.Creator = Creator;
                
            if(event1!= null){                          
            Context.Events.Add(event1);
            await Context.SaveChangesAsync();
            return Ok();
            }
            else 
            {
                return BadRequest("Neuspesno kreiranje eventa");
            }
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }

    }
}
