<<<<<<< HEAD
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

var rightnow = new Date();
var date = rightnow.getDate();
var year = rightnow.getFullYear();

current_date = document.getElementById("current_date");
year;

current_date.innerHTML = weekdayName + ", " + date + " " + monthName + " " + " " + year;


=======
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

var rightnow = new Date();
var date = rightnow.getDate();
var year = rightnow.getFullYear();

current_date = document.getElementById("current_date");
year;

current_date.innerHTML = weekdayName + ", " + date + " " + monthName + " " + " " + year;


>>>>>>> d08d44be9622de1fc454340a954d432227189462
