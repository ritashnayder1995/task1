'use strict'

const personalMovieDB ={
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while ( personalMovieDB.count == '' ||  personalMovieDB.count == null || isNaN ( personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++){
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
  } else {
      console.log("Произошла ошибка");
  }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};



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