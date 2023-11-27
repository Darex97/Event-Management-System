using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class ConnectionEventUser
    {
        [Key]
        public int ID { get; set; }

        [Required]
        //[JsonIgnore]
        public UserAdmin RegistratedUser {get; set;}

        [Required]
        //[JsonIgnore]
        public Event ForWhatEvent {get; set;}


    }
}