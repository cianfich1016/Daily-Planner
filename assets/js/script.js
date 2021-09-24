
var now = moment().format('dddd, MMMM Do');
$("#currentDay").text(now);

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

var allElements = [text9El, text10El, text11El, text12El, text13El, text14El, text15El, text16El, text17El];

var allTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentHour = parseInt(moment().format('H'));
console.log(currentHour)

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



//button9.click(function(){
    //localStorage.setItem("box9", text9El);
//}