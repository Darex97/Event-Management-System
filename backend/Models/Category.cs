using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Category  
    {
        
        [Key]
        public int ID { get; set; }

        [Required]
        public string Type { get; set; }
        
        //public List<Event> EventsInCategory {get; set;}


    }
}