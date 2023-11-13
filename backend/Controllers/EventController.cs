using System.Linq;
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
    [Route("GetEventbyId/{id}")]
    [AllowAnonymous]
    [HttpGet]
    public ActionResult GetEventbyId(int id)
    {
        var events = Context.Events.Where(p=> p.ID == id)
                                   .Include(q=> q.RegistredUsers).ToList();
                                   
        

            
           
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

    [Route("GetEventWhereUserRegistrated/{idUser}")]
    [AllowAnonymous]
    [HttpGet]
    public ActionResult GetEventWhereUserRegistrated(int idUser)
    {
    var events = Context.ConnectionEventUsers.Include(p=> p.ForWhatEvent)
                                .Include(t=> t.RegistratedUser)
                                .Where(q=> q.RegistratedUser.ID==idUser);
            

            
           
        return Ok(events);
    }

    [AllowAnonymous]
    [Route("GetEvent/{name}")]
    [HttpGet]
    public ActionResult GetUsersIdAsync(string name)
    {
        var eventReturn = Context.Events
            .Where(e => e.Name==name);
           
            return Ok(eventReturn);


        
        
    }


  
     // izmeni posle na korisnika i admina
    [Route("AddEvent/{idCreator}")] 
    
    [HttpPost]
    public async Task<ActionResult> AddEvent ([FromBody] Event ev,int idCreator)
    {
        try
        {
            

            var event2 = Context.Events.Where(p => p.Name == ev.Name).FirstOrDefault();
            if (event2 != null)
            {
                return BadRequest("Event exist");
            }     

            UserAdmin Creator = await Context.UsersAdmins.FindAsync(idCreator);
            //UserAdmin Creator2 = Context.UsersAdmins.Where(p => p.ID == 7).FirstOrDefault();
            
            Event event1 = new Event();
            event1.Name = ev.Name;
            event1.Date = ev.Date;
            event1.Time = ev.Time;
            event1.Place = ev.Place;
            event1.Price= ev.Price;
            event1.Language = ev.Language;
            event1.Categories = ev.Categories;
            event1.LongDescribe = ev.LongDescribe;
            event1.ShortDescribe = ev.ShortDescribe;
            event1.PicturePath = ev.PicturePath;
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


    // [AllowAnonymous] // izmeni posle na korisnika i admina
    // [Route("AddEvent/{name}/{date}/{time}/{place}/{price}/{language}/{categories}/{longDes}/{shortDes}/{picturePath}/{creatorId}")] 
    // [HttpPost]
    // public async Task<ActionResult> AddEvent (string name,string date,string time,string place,string price,string language,string categories,string longDes,string shortDes,string picturePath, int creatorId)
    // {
    //     try
    //     {
            

    //         var event2 = Context.Events.Where(p => p.Name == name).FirstOrDefault();
    //         if (event2 != null)
    //         {
    //             return BadRequest("Event exist");
    //         }     

    //         UserAdmin Creator = await Context.UsersAdmins.FindAsync(creatorId);
               
    //         Event event1 = new Event();
    //         event1.Name = name;
    //         event1.Date = date;
    //         event1.Time = time;
    //         event1.Place = place;
    //         event1.Price= price;
    //         event1.Language = language;
    //         event1.Categories = categories;
    //         event1.LongDescribe = longDes;
    //         event1.ShortDescribe = shortDes;
    //         event1.PicturePath = picturePath;
    //         event1.Creator = Creator;
                
    //         if(event1!= null){                          
    //         Context.Events.Add(event1);
    //         await Context.SaveChangesAsync();
    //         return Ok();
    //         }
    //         else 
    //         {
    //             return BadRequest("Neuspesno kreiranje eventa");
    //         }
    //     }
    //     catch (Exception e)
    //     {
    //         return BadRequest(e.Message);
    //     }

    // }

    ///register for event
    [AllowAnonymous] // izmeni posle na korisnika i admina
    [Route("RegisterForEvent/{idEvent}/{idUser}")] 
    [HttpPut]
    public async Task<ActionResult> RegisterForEvent (int idEvent, int idUser)
    {
        try
        {
            

            var event1 = Context.Events.Where(p => p.ID == idEvent).FirstOrDefault();
            if (event1 == null)
            {
                return BadRequest("Event doesn't exist");
            }
            var user1 = Context.UsersAdmins.Where(p => p.ID == idUser).FirstOrDefault();
            if (user1 == null)
            {
                return BadRequest("User doesn't exist");
            }        

            //UserAdmin Creator = await Context.UsersAdmins.FindAsync(creatorId);
               
            ConnectionEventUser ceu = new ConnectionEventUser();
            ceu.RegistratedUser = user1;
            ceu.ForWhatEvent = event1;
                
            if(ceu!= null){                          
            Context.ConnectionEventUsers.Add(ceu);
            await Context.SaveChangesAsync();
            return Ok();
            }
            else 
            {
                return BadRequest("Neuspesno kreiranje veze");
            }
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }

    }

        [Route("ChangeEventUser/{idEvent}/{name}/{date}/{time}/{place}/{categories}/{longDes}/{shortDes}/{picturePath}")]
        [HttpPut]
        [AllowAnonymous]
        public async Task<ActionResult> ChangePlan(int idEvent,string name,string date,string time,string place,string categories,string longDes,string shortDes, string picturePath)
        {
            //var strucnoLiceA = Context.StrucnaLIca.Where(p => p.ID == idStrucnjaka).FirstOrDefault();
            
            var event2 = Context.Events.Where(p => p.ID == idEvent).FirstOrDefault();
            if (event2 == null)
            {
                return BadRequest("Plan ne postoji");
            }
            try
            {
                var eventForChange = await Context.Events.FindAsync(event2.ID);
                //var strucnjak = await Context.StrucnaLIca.FindAsync(idStrucnjaka);
                eventForChange.Name = name;
                eventForChange.Date = date;
                eventForChange.Time = time;
                eventForChange.Place=place;
                eventForChange.Categories = categories;
                eventForChange.LongDescribe = longDes;
                eventForChange.ShortDescribe = shortDes;
                eventForChange.PicturePath = picturePath;
                

                await Context.SaveChangesAsync();
                return Ok();
            }

            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
           
        }

        [Route("ChangeEventUser")]
        [HttpPut]
        [AllowAnonymous]
        public async Task<ActionResult> ChangeEventUser([FromBody] Event ev){
            //var strucnoLiceA = Context.StrucnaLIca.Where(p => p.ID == idStrucnjaka).FirstOrDefault();
            
            var event2 = Context.Events.Where(p => p.Name == ev.Name).FirstOrDefault();
            if (event2 == null)
            {
                return BadRequest("Plan ne postoji");
            }
            try
            {
             var eventForChange = await Context.Events.FindAsync(event2.ID);
            //UserAdmin Creator2 = Context.UsersAdmins.Where(p => p.ID == 7).FirstOrDefault();
            
            
            eventForChange.Name = ev.Name;
            eventForChange.Date = ev.Date;
            eventForChange.Time = ev.Time;
            eventForChange.Place = ev.Place;
            eventForChange.Price= ev.Price;
            eventForChange.Language = ev.Language;
            eventForChange.Categories = ev.Categories;
            eventForChange.LongDescribe = ev.LongDescribe;
            eventForChange.ShortDescribe = ev.ShortDescribe;
            eventForChange.PicturePath = ev.PicturePath;
                

                await Context.SaveChangesAsync();
                return Ok();
            }

            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
           
        }

        [Route("DeleteEvent/{id}/{idUser}")]
        [HttpDelete]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteEvent(int id, int idUser)
        {
            //var strucnoLiceA = Context.UsersAdmins.Where(p => p.ID == idUser).FirstOrDefault();
            
            var event2 = Context.Events.Where(p => p.ID == id).FirstOrDefault();
            if (event2 == null)
            {
                return BadRequest("Event ne postoji");
            }
            try
            {
                var event1 = await Context.Events.FindAsync(event2.ID);
                Context.Events.Remove(event1);
                await Context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }
}
