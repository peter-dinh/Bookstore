using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrderService.Models
{
    public class OrderItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [ForeignKey("Order")]
        [Required(ErrorMessage = "Order is required")]
        public int OrderID {get; set;}
        [ForeignKey("Product")]
        [Required(ErrorMessage = "Product is required")]
        public int ProductID {get; set;}
        public int Price {get; set;}
        public int Quantity {get; set;}
    }
}