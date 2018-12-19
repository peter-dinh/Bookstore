using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Product_Services.Models
{
    public class Cart
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [ForeignKey("Account")]
        [Required(ErrorMessage = "Username is required")]
        public int AccountID { get; set; }
        public int Quantity {get; set;}
        public int Total {get; set;}

        public virtual ICollection<CartItem> CartItems { get; set; } 
    }
}