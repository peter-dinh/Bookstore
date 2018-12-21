using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Product_Services.Models
{
    public class CartItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [ForeignKey("Cart")]
        [Required(ErrorMessage = "Cart is required")]
        public int CartID { get; set; }
        [ForeignKey("Product")]
        [Required(ErrorMessage = "Product is required")]
        public int ProductID {get; set;}
        public int Quantity {get; set;}
        public int Price {get; set;}
        public int Discount {get; set;}

        public virtual ICollection<Product> Products { get; set; } 
        public virtual ICollection<Cart> Carts { get; set; } 
    }
}