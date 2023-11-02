using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class EventController : ControllerBase
{
    public EMSContext Context {get; set;}

    public EventController(EMSContext context)
    {
        Context= context;
    }
    
}
