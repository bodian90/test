//три основные булевые операторы И(&&) или(||), не(!)

//Первый оперантор И (&&) если одно из значений (false) то будет false
/*var hadShower = true;
var hasBackpack = false;
console.log(hadShower&&hasBackpack);*/


//второй оперантор Или (||) если одно из значений (true) то будет true
/*var hasApple = true;
var hasOrange = false;
console.log(hasApple||hasOrange);
*/
//третий оперантор Не (!) преврашает одно в другое если было (false) то будет (true)
/*var isWeekend = true;
var needToShowerToday = !isWeekend;
console.log(needToShowerToday);*/

//Совмещение логических операций
var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var ShouldGoToSchool = !isWeekend && hadShower && (hasApple||hasOrange);
console.log(ShouldGoToSchool);

//Сравнение чисел с помощью булевых значений

//Больше 
var height = 155;
var heightRestriction = 150;
console.log(height >= heightRestriction);

//Меньше 
var heightpeople = 120;
var heightRestrictionpeople = 120;
console.log(heightpeople <= heightRestrictionpeople);

//Равно чтобы проверить два числа на равенство (===), а (=) присваивает значение


