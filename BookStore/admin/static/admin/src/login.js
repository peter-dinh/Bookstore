$(document).ready(function(){
    $("#login").click(function(){
        data = {
            "inputEmail": $('#inputEmail').val(),
            "inputPassword": $("#inputPassword").val()
        }
    
        $.ajax({
            url: "http://localhost:8000/admin/login",
            method: "POST",
            contentType: 'application/x-www-form-urlencoded',
            data: data,
            success: function(response){
                console.log(response);
                if(response.error){
                    alert(response.error);
                }
                if(response.access_token){
                    sessionStorage
                    alert(response.access_token.token);
                }
            }
        });
    });
});