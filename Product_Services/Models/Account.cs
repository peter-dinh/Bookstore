using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Product_Services.Models
{
    public class Account{
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [Required]
        [StringLength(50), DataType("varchar")]   
        public string Username { get; set; }
        public string Password {get; set;}
        public string AccountName { get; set; }
        public string AccountType{get;set;}

        public string Phone{get; set;}
        public string Address{get; set;}
    }
}