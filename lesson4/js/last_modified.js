/*var x = document.lastModified;
document.getElementById("last_modified").innerHTML = x;*/

var a = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var monthName = month[a.getMonth()];


var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var dateObj = new Date()
var weekdayNumber = dateObj.getDay()
var weekdayName = arrayOfWeekdays[weekdayNumber]


function lastModified() {
    var modiDate = new Date(document.lastModified);
    var showAs = modiDate.weekdayName + ", " + modiDate.getDate() + " " + modiDate.monthName + " " + modiDate.getFullYear();
    return showAs
}







document.write("Last updated on ")
document.write(lastModified());

document.write("");