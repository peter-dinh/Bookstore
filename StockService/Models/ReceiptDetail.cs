using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace StockService.Models
{
    public class ReceiptDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [ForeignKey("Receipt")]
        [Required(ErrorMessage = "Receipt is required")]
        public int ReceiptID {get; set;}
        [ForeignKey("Product")]
        [Required(ErrorMessage = "Product is required")]
        public int ProductID {get; set;}
        public string Agency {get; set;}
        public string Phone {get; set;}
        public string Email {get; set;}
        public string Address {get; set;}
        public int Price {get; set;}
        public int Quantity {get; set;}
    }
}