'use strict'

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется?', '');
      if ((typeof(a)) === 'string' &&
        (typeof(a)) != null &&
        (typeof(b)) != null &&
        a != '' &&
        b != '' &&
        a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
      } //else if (a === undefined) {
        //console.log('Ошибка');
      //} else if (a === '' && b != '' && (typeof(b)) != null) {
        //a === 'key';
        //console.log('done');
       // appData.expenses[a] = b;
     // }
    };

    appData.moneyPerDay = appData.budget / 30;
    alert("Ежедневный бюджет: " + appData.moneyPerDay);

    if(appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    };




//let num = 50;
//while (num < 55) {
  //console.log(num);
  //num++;
//};

//do {
  //console.log(num);
  //num++;
//}
//while (num < 55);

//for (let i = 1; i < 8; i++) {
  //if (i == 6) {
    //break;
  //}
  //console.log(i);
//};