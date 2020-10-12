'use strict';

const date = new Date(),
  nextDate = new Date('2021 1 1'),
  timeRemaining = (nextDate - date) / 1000,
  hours = date.getHours(),
  time = date.toLocaleTimeString('en'),
  today = date.toLocaleString('ru', { weekday: 'long' }),
  timer = Math.floor(timeRemaining / 60 / 60 / 24);
let greeting = (hours >= 5 && hours < 12) ? 'Доброе утро' :
  (hours >= 12 && hours < 18) ? 'Добрый день' :
  (hours >= 18 && hours < 24) ? 'Добрый вечер' : 'Доброй ночи';
const marryXmas = document.querySelector('.marryXmas');
marryXmas.innerHTML = `${greeting}
<br>
Сегодня: ${today}
<br>
Текущее время: ${time}
<br>
До нового года осталось ${timer} дней`;
