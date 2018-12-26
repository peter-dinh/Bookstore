using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace OrderService.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int ProductID{get;set;}
        public String Name { get; set; }
        public int Quantity { get; set; }
        public int Price {get; set;}
        public int Discount {get;set;}
        public int Bought {get; set;}
        public Boolean Is_Active {get;set;}
        public Boolean Archive {get;set;} 
    }

}