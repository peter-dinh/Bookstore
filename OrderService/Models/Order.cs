using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrderService.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [ForeignKey("Account")]
        [Required(ErrorMessage = "Username is required")]
        public int CustomerID {get; set;}
        public int Amount {get; set;}
        public string Email {get; set;}
        public string Address {get; set;}
        public string Phone {get; set;}
        public int State {get; set;}
    }
}