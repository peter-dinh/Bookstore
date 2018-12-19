using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AccountService.Models
{
    public class Account{
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [Required]
        [StringLength(50), DataType("varchar")]   
        public string AccountID { get; set; }
        public string AccountName { get; set; }
        public string AccountType{get;set;}

        public string Phone{get; set;}
        public string Address{get; set;}

        private class KeyAttribute : Attribute
        {
        }
    }
}