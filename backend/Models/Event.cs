using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    public class Event
    {
        public int ID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        // public int CreatorID {get;set;}
        
        [Required]
        [MaxLength(150)]
        public string Date { get; set; }    
        
        [Required]
        [MaxLength(50)]
        public string Time { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string Place { get; set; }

        [Required]
        [MaxLength(50)]
        public string Price { get; set; }

        [Required]
        [MaxLength(50)]
        public string Language { get; set; }

        [Required]
        public Category Categories { get; set; }   

        [Required]
        public string LongDescribe { get; set; } 

        [Required]
        public string ShortDescribe { get; set; }

        [Required]
        public string PicturePath { get; set; }

        //[Required]
        //[JsonIgnore]
        public UserAdmin Creator {get; set;}

        public List<ConnectionEventUser> RegistredUsers {get; set;}

        public List<Review> Reviews {get; set;}



    }
}