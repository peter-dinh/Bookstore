using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Product_Services.Models
{
    public class Rating
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [ForeignKey("Account")]
        [Required(ErrorMessage = "Username is required")]
        public int AccountID {get; set;}
        [ForeignKey("Product")]
        [Required(ErrorMessage = "Product is required")]
        public int ProductID {get; set;}

        public int Star {get; set;}
        public string Comment {get; set;}
        public Boolean Is_Active {get; set;} 

        public virtual ICollection<Product> Products { get; set; } 
        public virtual ICollection<Account> Accounts { get; set; }

    }
}