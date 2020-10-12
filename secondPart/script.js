'use strict';

const date = new Date(),
  nextDate = new Date('2021 1 1'),
  timeRemaining = (nextDate - date) / 1000,
  hours = date.getHours(),
  time = date.toLocaleTimeString('en'),
  timer = Math.floor(timeRemaining / 60 / 60 / 24);
let greeting;
if (hours >= 5 && hours < 12) {
  greeting = 'Доброе утро';
} else if (hours >= 12 && hours < 18) {
  greeting = 'Добрый день';
} else if (hours >= 18 && hours < 24) {
  greeting = 'Добрый вечер';
} else {
  greeting = 'Доброй ночи';
}
let day = date.getDay();
switch (day)
  {
    case 0: day = "Воскресенье"; break;
    case 1: day = "Понедельник"; break;
    case 2: day = "Вторник"; break;
    case 3: day = "Среда"; break;
    case 4: day = "Четверг"; break;
    case 5: day = "Пятница"; break;
    case 6: day = "Суббота"; break;
  }

const marryXmas = document.querySelector('.marryXmas');
marryXmas.innerHTML = `${greeting}
<br>
Сегодня: ${day}
<br>
Текущее время: ${time}
<br>
До нового года осталось ${timer} дней`;
