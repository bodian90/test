var MyAweSomeString = "Будет что то новое";
console.log(MyAweSomeString);

var NumberNine = 9; //строка плюс число  будет строка ("9" + 9), ("9"+"9"= 99) (9+9=18)
var StringNine ="9";
var Nine = NumberNine + StringNine;
console.log(Nine);

//объеденение строк 
var qreeting = "Hello";
var Myname = " Bohdan";
console.log(qreeting + Myname);

//можно узнать длину строки при помощи команды, которую можно писать в конце строки или переменной ".length"
var Superhero = "какузнатьдлиннустроки".length;
console.log(Superhero);

// получить отдельный символ строки при помощи "[]" сразу после строки ставишь [] в которой указана позиция нужного символа
var Name = "Bohdan";
console.log(Name [0],Name [1],Name [2]);

//Получить часть строки при помощи команды, в конце строки ".slice(1,2);"
var longstring = "hello,my name is a Bohdan".slice(0,10);
console.log(longstring);

//Перевод строки в заглавные или строчные символы
//чтобы вывести текст заглавными буквами команда "toUpperCase();"
var teststring = "How are you?".toUpperCase();
console.log(teststring);
//чтобы вывести текст строчными буквами команда "toLowerCase();"
var testLowString = "How are you?".toLowerCase();
console.log(testLowString);

//попробуй сделать из слова "эЙ кАК деЛа?" в "Эй как дела?"
var SillyString = "эЙ, кАК деЛа?";
var lowerString = SillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var resetOfString = lowerString.slice(1);
console.log(firstCharacterUpper + resetOfString);


