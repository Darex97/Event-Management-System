using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Review
    {
        [Key]
        public int ID { get; set; }
        
        [Required]
        public string Comment { get; set; }

        [Required]
        public int Rating { get; set; }

        [Required]
        public Event ForWhatEvent {get; set;}


    }
}