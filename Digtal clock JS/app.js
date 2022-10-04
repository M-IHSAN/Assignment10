

function myclock() {                                                    //for time
    var date= new Date()

    var h= date.getHours();              //to get hours
    var mint= date.getMinutes();        //to get minutes
    var sec= date.getSeconds();         //to get seconds
    var session

if(h>12||h==0)                          //to convert from 24 hour clock to 12 hour
{
    h=  Math.abs (h-12)
}
if (h>12||h==0)                          //AM/PM Sessions
{                    
    session="AM" 
} 
else {
    session="PM" 
}  

var time =( (h <10 ?"0":'')+(h))+" : "+( (mint <10 ?"0":'')+(mint))+" : "+( (sec <10 ?"0":'')+(sec)) +" "+session;
document.getElementById("DigitalClock").innerHTML = time;
}

setInterval("myclock()", 1000);

    
window.onload= function mydate()                                                   // for date
{
var date= new Date()
 var day=((date.getDate()+1)<10 ?"0":'')+(date.getDate()+1);
 var month=((date.getMonth()+1)<10 ?"0":'')+(date.getMonth()+1);
 var year=date.getFullYear();
 var DigitalDate=day+"-"+month+"-"+year
 document.getElementById("DigitalDate").innerHTML = DigitalDate;
}


