//Display current day at top in header marked by id currentDay.
var now = moment().format('dddd, MMMM Do');
$("#currentDay").text(now);

//Declaring variables using jQuery from ids in index.html.
var textArea = $('textarea')
var text9El = $("#input9");
var text10El = $("#input10");
var text11El = $("#input11");
var text12El = $("#input12");
var text13El = $("#input13");
var text14El = $("#input14");
var text15El = $("#input15");
var text16El = $("#input16");
var text17El = $("#input17");

var button9 = $("#button9");
var button10 = $("#button10");
var button11 = $("#button11");
var button12 = $("#button12");
var button13 = $("#button13");
var button14 = $("#button14");
var button15 = $("#button15");
var button16 = $("#button16");
var button17 = $("#button17");

//Created 2 arrays. One to label each text element representing the input boxes and the other with the actual hour value of each row.
var allElements = [text9El, text10El, text11El, text12El, text13El, text14El, text15El, text16El, text17El];

var allTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//Current hour and parsing the string to an integer to match value of integers in allTimes.
var currentHour = parseInt(moment().format('H'));

textArea.each(function(i){
     if(currentHour < allTimes[i]){
       allElements[i].addClass('future')
    }else if (currentHour > allTimes[i]){
        allElements[i].addClass('past')
    } else if (currentHour === allTimes[i]){
        allElements[i].addClass('present')
        console.log("hello")
    } else return;
   

    }
)

//On the click of each button in each row, this saves the input to local storage.
button9.on("click", function(){
    var tasks9 = text9El.val();
    localStorage.setItem("tasks9", tasks9);
});

button10.on("click", function(){
    var tasks10 = text10El.val();
    localStorage.setItem("tasks10", tasks10);

});

button11.on("click", function(){
    var tasks11 = text11El.val();
    localStorage.setItem("tasks11", tasks11);

});

button12.on("click", function(){
    var tasks12 = text12El.val();
    localStorage.setItem("tasks12", tasks12);

});

button13.on("click", function(){
    var tasks13 = text13El.val();
    localStorage.setItem("tasks13", tasks13);
    
});

button14.on("click", function(){
    var tasks14 = text14El.val();
    localStorage.setItem("tasks14", tasks14);

});

button15.on("click", function(){
    var tasks15 = text15El.val();
    localStorage.setItem("tasks15", tasks15);

});

button16.on("click", function(){
    var tasks16 = text16El.val();
    localStorage.setItem("tasks16", tasks16);

});

button17.on("click", function(){
    var tasks17 = text17El.val();
    localStorage.setItem("tasks17", tasks17);

});

//Get each item stored. Input will remain on refresh.
text9El.val(localStorage.getItem("tasks9"));
text10El.val(localStorage.getItem("tasks10"));
text11El.val(localStorage.getItem("tasks11"));
text12El.val(localStorage.getItem("tasks12"));
text13El.val(localStorage.getItem("tasks13"));
text14El.val(localStorage.getItem("tasks14"));
text15El.val(localStorage.getItem("tasks15"));
text16El.val(localStorage.getItem("tasks16"));
text17El.val(localStorage.getItem("tasks17"));