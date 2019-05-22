let money = +prompt("Твой бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: false

};


for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        

        if (typeof(a)==="string" && typeof(a) !=null && typeof(b) !=null 
        && a !="" && b !="" && a.length<50){
            console.log("Done");
            appData.expenses [a] = b;

        } else {
            
        }
} 

appData.moneyPerDay = appData.budget / 30;

alert("Ежидневный бюджет "+ appData.moneyPerDay);

if (appData.moneyPerDay <100) {
    console.log("Минимальный уровень достатка");
}else if (appData.moneyPerDay > 100&&appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
}else if (appData.moneyPerDay > 2000){
    console.log("Високий уровень достатка");
}else {
    console.log("Произошла ощибка");
}
