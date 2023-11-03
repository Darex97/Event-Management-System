using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Event
    {

        public int ID { get; set; }

        public string Name { get; set; }

        public string Date { get; set; }    

        public string Time { get; set; }

        public string Place { get; set; }

        public string Categories { get; set; }   

        public string LongDescribe { get; set; } 

        public string ShortDescribe { get; set; }

        public string PicturePath { get; set; }

        [Required]
        [JsonIgnore]
        public UserAdmin Creator {get; set;}

        public List<ConnectionEventUser> RegistredUsers {get; set;}


    }
}