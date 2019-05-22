/* Программа считаешь количество секунд в году,
 а после узнали сколько секунд прошло в моей жизни*/


var SecondInMinute = 60;
var MinutesInAnHours = 60;
var SecondInAnHour = SecondInMinute * MinutesInAnHours;
console.log(SecondInAnHour);
var HoursInDay = 24;
var SecondInADay = SecondInAnHour * HoursInDay;
console.log(SecondInADay);
var DaysInAYears = 365;
var SecondInAYear = SecondInADay * DaysInAYears;
console.log(SecondInAYear);

var MyAge = 23;
var SecondInMyLife = MyAge * SecondInAYear;
console.log(SecondInMyLife);
