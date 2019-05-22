// Massive

var Dinosaurs = [
    "Тиранозавр",
    "Велоцераптор",
    "Стегозавр",
    "Брахиозавр",
    "Диплодок",
    "Апатозавр",
    "Птерадон",
    "Трицераптопс"
];
console.log(Dinosaurs[1]);

var Dino = [];
Dino [1] = "Terro";
Dino [2] = "Tirex";
Dino [3] = "Dragon";
console.log(Dino[1]);
//В одном массиве может быть несколько, чтобы это сделать пишешь [[]], а чтобы вызвать например массив идет под номером 2(это пишешь в одних скобках)
//(а елеметно который в другом масике пишешь другую цифру)
var messiveatack = [3, "Hello",["World", "Day and Night"], 12,[22,13,23],"BackAnd"];
console.log(messiveatack[4][2]);

//Длина .lenght таким образом можно узнать длину массива(когда большое количество елементов)
var MyDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Friday",
    "Saturday"
];
console.log(MyDay.length);
//
var animals = []; // создаешь массив и с помощью команды (.push) добавляешь в массив елементы в начало массива(начинает считать с (1,2,3))
animals.push("Cat");
animals.push("Dog");
animals.push("fish");

animals.unshift("Monkey");// .unshift добавляет елемент на начало массива даже если он идет (5,6,7)
animals.unshift("Elephant");

var lastAnimals = animals.pop();// чтобы удалить последний елемент из массива и возвращает ввиде значения воспользуемся командой .pop()
console.log(lastAnimals);
console.log(animals);
animals.pop();
animals.unshift(lastAnimals);
console.log(animals);

animals.shift();// чтобы удалить первый елемент из массива и возвращает ввиде значения воспользуемся командой .shift
console.log(animals);

//Обьеденить два массива с помощью команды .concat(otherArray) чтобы объединить несколько массивов запиши их через ","
var FirstArray = ["one", "two", "three"];
var OtherArray = ["for","five","six","seven"];
var ThreeArray = ["eight","nine","ten"];
var ForArray = ["eleven","twelwe"];
var FirstAndOtherArray = FirstArray.concat(OtherArray);
console.log(FirstAndOtherArray);
var AllArray = FirstArray.concat(OtherArray,ThreeArray,ForArray);
console.log(AllArray);
//поиск индекса в массиве .indexOf("")
var colors = ["красный", "синий","зеленый"];
console.log(colors.indexOf("синий"));

//условия (функции)
if (2*4==9){
    console.log("True")
}else {
    console.log("False")
}



if (num < 60){
    console.log("Ошибка")
} else if (num > 100){
    console.log("много")
}   else {
    console.log("Верно")
};

(num == 70) ? console.log("Верно"):console.log("Ошибка");
//(условие которое хотим проверить) ? сначала дейстсвие которое выполнится в случае успеха: в случаее ощибки


switch (num){
    case num < 75:
        console.log("Много");
        break;
    case num > 60:
        console.log("Все еще Много");
        break;
    case 70:
        console.log("Верно!");
        break;
        default:
        console.log("Ошибка");
}

//Циклы 
//1
while (num < 60){
console.log(num);
++num;
}

//2
let num = 50;
do {
    console.log(num);
    num++; 
}
while (num<55);

//3
for(let i = 3; i < 25; i = i+ 3){
        console.log(i);
}

var x = 5; 
alert( x++ );

let x =[ ] + false - null + true;
console.log(x);

let y = 1;
let z = y = 2;
alert(z);

let j =[ ] + 1 + 2;
console.log(j);


alert( "1"[0] );

console.log( a && b );
console.log( +"Infinity" );
console.log(0 || "" || 2 || undefined || true || falsе);
