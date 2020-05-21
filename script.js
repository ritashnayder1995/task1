'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB ={
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);








//let money, time;

//function start() {
  //money = +prompt('Ваш бюджет на месяц?');
  //time = prompt('Введите дату в формате YYYY-MM-DD');

  //while(isNaN(money) || money == "" || money == null) {
   // money = +prompt('Ваш бюджет на месяц?');
  //}
//};

//start();

//const appData = {
  //budget: money,
  //timeData: time,
  //expenses: {},
  //optionalExpenses: {},
  //income: [],
  //savings: true
//};

//function chooseExpenses() {
  //for (let i = 0; i < 2; i++) {
    //let a = prompt('Введите обязательную статью расходов в этом месяце'),
      //  b = prompt('Во сколько обойдется?');
    //if ((typeof(a)) === 'string' &&
      //  (typeof(a)) != null &&
        //(typeof(b)) != null &&
        //a != '' &&
        //b != '' &&
        //a.length < 50) {
      //console.log('done');
      //appData.expenses[a] = b;
    //} else {
      //i = i - 1;
    //}
  //}
//}
//chooseExpenses();

//function detectDayBudget() {
  //appData.moneyPerDay = (appData.budget / 30).toFixed();
  //alert("Ежедневный бюджет: " + appData.moneyPerDay);
//}
//detectDayBudget();

//function detectLevel() {
//  if(appData.moneyPerDay < 100) {
//    console.log("Минимальный уровень достатка");
//  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//    console.log("Средний уровень достатка");
//  } else if (appData.moneyPerDay > 2000) {
//    console.log("Высокий уровень достатка");
//  } else {
//    console.log("Произошла ошибка");
//  };
//}
//detectLevel();








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







//function checkSavings() {
  //if (appData.savings == true) {
  //  let save = +prompt("Какова сумма накоплений?"),
  //    percent = +prompt("Под какой процент?");

  //    appData.monthIncome = save / 100 / 12 * percent;
  //    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
 // }
//}

//checkSavings();

//const optionalExpenses = {
 // 1: "",
 // 2: "",
 // 3: ""
//}


//function chooseOptExpenses() {
//  for (let i = 1; i < 4; i++) {
//     optionalExpenses[i] = prompt('Статья необязательных расходов?');
//  }
//}