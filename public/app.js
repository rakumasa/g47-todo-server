$(document).ready(function(){
  var newOb = {
    "id": 6,
    "title": "hot dog creation",
    "completed": false
  }
  $.ajax({
    type: "POST",
    dataType: "json", //you don't have to use it
    url: 'http://localhost:8000/todos',
    data: newOb,
    success: function(){
      console.log("add success!");
    }
  })
    .done(function(data){
      console.log(data);
    })
    .fail(function(data){
     alert("it wasn't added!");
    })

    //Grabbibng a data from todos.json
    $.ajax({
      type: "GET",
      dataType: "json", //you don't have to use it if server is definded the process
      url: 'http://localhost:8000/todos',
      success: function(){
        console.log("grab success!")
      }
    })
      .done(function(data){
          for (var i=0;i<data.length;i++){
              $('#blah').append('<li>' + 'item#' + (data[i].id + 1) + ' ' + data[i].title + ' :' + data[i].completed + '</li>')
            } //end of loop
      })
      .fail(function(data){
       alert("Something went wrong!");
      })


    // $.ajax({
    //   type: "POST",
    //   dataType: "json", //you don't have to use it
    //   url: 'http://localhost:8000/todos',
    //   success: function(){
    //     console.log("add success!")
    //   }
    // })
    //   .done(function(data){
    //     var newOb = {
    //       "id": 0,
    //       "title": "go to the store for milk",
    //       "completed": false
    //     }
    //     data.push(newOb);
    //
    //     for (var i=0;i<data.length;i++){
    //         $('#blah').append('<li>' + 'item#' + (data[i].id + 1) + ' ' + data[i].title + ' :' + data[i].completed + '</li>')
    //       } //end of loop
    //
    //   })
    //   .fail(function(data){
    //    alert("it wasn't added!");
    //   })





    // $.ajax({
    //   type: "GET"
    //   url: 'http://localhost:8000/todos',
    //   data: false,
    //   success: ,
    //   dataType: dataType
    // });









    // $.getJSON('http://localhost:8000/todos').then(function(data){
    //     for (var i=0;i<data.length;i++){
    //         $('#blah').append('<li>' + 'item#' + (data[i].id + 1) + ' ' + data[i].title + ' :' + data[i].completed + '</li>')
    //       } //end of loop
    //       $('#blah li :nth-child(2)').empty();
    // });
});   //end of JSON
