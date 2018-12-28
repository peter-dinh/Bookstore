function guid () {
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  }

function load_category(keyword){
    $("#list-category").empty()
    $.ajax({
      url: 'http://13.67.105.209:8000/merchant/categorys?keyword=' + keyword,
      method: 'GET',
      contentType: 'application/json',
      success: function(response){
        for (var item = 0; item < response.length; item++){
          html = '<li><a href="#" data-id-category='+ response[item].pk +' onclick="clickcategory($(this).text(), $(this).attr(\'data-id-category\'));">'+ response[item].fields.name_category +'</a></li>'
          $("#list-category").append(html)
        }
      },  
    })
  }


  // Choose Category
function clickcategory(name, id) {
    var category_search = $('.category_search')
    var check = false;
    for( var i = 0; i < category_search.length; i++){
      if(category_search[i].id == id){
        check = true;
      }
    }
    if (check == false){
      var html = '';
      html += '<div class="col-lg-12 category_search" id="' + id + '">' + name + '</div>'
      $('#value_category').append(html);
    }
  }
