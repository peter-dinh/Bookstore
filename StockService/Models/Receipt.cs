using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace StockService.Models
{
    public class Receipt
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [ForeignKey("Account")]
        [Required(ErrorMessage = "Admin is required")]
        public int AdminID {get; set;}
        public int Amount {get; set;}
        public string Created {get; set;}
        public int State {get; set;}
    }
}