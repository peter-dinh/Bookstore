using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrderService.Models
{
    public class Login
    {
        public string Email { get; set; }
        public string Password {get; set;}
    }
}