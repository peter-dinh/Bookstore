$(function () {
  eval($('#code').text());
  
    var day_data = [
                    {"period": "2012-09-25", "licensed": 3407, "sorned": 60},
                    {"period": "2012-09-24", "licensed": 3351, "sorned": 32},
                    {"period": "2012-09-22", "licensed": 3269, "sorned": 33},
                    {"period": "2012-09-20", "licensed": 3256, "sorned": 55},
                    {"period": "2012-09-19", "licensed": 3257, "sorned": 25},
                    {"period": "2012-09-18", "licensed": 3248, "sorned": 40},
                    {"period": "2012-09-17", "licensed": 3171, "sorned": 30},
                    {"period": "2012-09-16", "licensed": 3171, "sorned": 25},
                    {"period": "2012-09-15", "licensed": 3201, "sorned": 33},
                    {"period": "2012-09-14", "licensed": 3215, "sorned": 25}
                  ];
                  Morris.Line({
                    element: 'graph',
                    data: day_data,
                    xkey: 'period',
                    ykeys: ['sorned'],
                    labels: ['SORN'],
                    resize: true,
                    lineWidth: 3,
                    pointSize: 6,
                    lineColors: ['#ff0090', '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                    axes: false, 
                    grid: false,
                    
                  });

  
  
  
  
    eval($('#code2').text());
  
    var day_data = [
                    {"period": "2012-09-23", "licensed": 3357, "sorned": 30},
                    {"period": "2012-09-22", "licensed": 3351, "sorned": 32},
                    {"period": "2012-09-21", "licensed": 3269, "sorned": 31},
                    {"period": "2012-09-20", "licensed": 3246, "sorned": 40},
                    {"period": "2012-09-19", "licensed": 3257, "sorned": 30},
                    {"period": "2012-09-18", "licensed": 3248, "sorned": 20},
                    
                  ];
                  Morris.Line({
                    element: 'graph2',
                    data: day_data,
                    xkey: 'period',
                    ykeys: ['sorned'],
                    labels: ['SORN'],
                    resize: true,
                    lineWidth: 3,
                    pointSize: 5,
                    lineColors: ['#fff', '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                    axes: true,
                    grid: false,
                    gridLineColor: '#fff',
                    gridTextColor: '#fff',
                    
                  });
  
  
 });




$(function () {

   
eval($('#code1').text());
                   Morris.Donut({
                   element: 'graph1',
                   data: [
                    {value: 40, label: '64K'},
                    {value: 60, label: 'some text'}
                         ],
                  formatter: function (x) { return x + "%"}
                 }).on('click', function(i, row){
                  console.log(i, row);
                      
        });

});






$(function () {
             
$(".todayGraph1").click(function(){
  
   
 eval($('#code1').text());
                   Morris.Donut({
                   element: 'graph1',
                   data: [
                    {value: 40, label: '64K'},
                    {value: 60, label: 'some text'}
                         ],
                  formatter: function (x) { return x + "%"}
                 }).on('click', function(i, row){
                  console.log(i, row);
                      
        });

});



});














