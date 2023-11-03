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
        public string Name { get; set; } //=Null!

        [Required]
        [MaxLength(50)]
        public string Surname { get; set; }

        [Required]
        public int IsAdmin { get; set; }

        [Required]
        public string PicturePath { get; set; }

        [Required]
        public int Years { get; set; }

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