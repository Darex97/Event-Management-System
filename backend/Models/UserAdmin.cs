using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{   
    [Table("UserAdmin")]
    public class UserAdmin 
    {
        [Key]
        [Required]
        public int ID { get; set; }
        

        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; } //=Null!

        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }

        [Required]
        public string Gender { get; set; }

        
        public int IsAdmin { get; set; }

        
        public string PicturePath { get; set; }

        [Required]
        public string BirthDay { get; set; }

        public string City { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public List<Event> CreatedEvents {get; set;}

        public List<ConnectionEventUser> RegistratedEvents {get; set;}

    }
}