using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StockService.Models
{
    public class Account{
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [Required]
        [StringLength(50), DataType("varchar")]   
        public string Email { get; set; }
        public string Password {get; set;}
        public string AccountName { get; set; }
        public int AccountType{get;set;}
        public string Phone{get; set;}
        public string Address{get; set;}
        public string Token{get; set;}
        public DateTime Created {get; set;}
        public Boolean Lock{get; set;}
    }
}