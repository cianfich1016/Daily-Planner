
var now = moment().format('dddd, MMMM Do');
$("#currentDay").text(now);

var text9El = $("#input9");
var text10El = $("#input10");
var text11El = $("#input11");
var text12El = $("#input12");
var text13El = $("#input13");
var text14El = $("#input14");
var text15El = $("#input15");
var text16El = $("#input16");
var text17El = $("#input17");

var allTimes = [text9El, text10El, text11El, text12El, text13El, text14El, text15El, text16El, text17El];

text9El = 9;
text10El = 10;
text11El = 11;
text12El = 12;
text13El = 13;
text14El = 14;
text15El = 15;
text16El = 16;
text17El = 17;



colors();

function colors(){
  var currentHour = moment().format('H');
  for (var i=0; i <= 24; i++){
     if(currentHour < allTimes[i]){
       allTimes[i].addClass('future')
    }else if (currentHour > allTimes[i]){
        allTimes[i].addClass('past')
    } else if (currentHour === allTimes[i]){
        allTimes[i].addClass('present')
    } else return;
    }
}

//function setStorage9(){
    //localStorage.setItem("box9", text9Input);
//};

//button9.addEventListener("click", setStorage9);