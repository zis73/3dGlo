window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60) % 24;
            return { timeRemaining, hours, minutes, seconds };
        }

        function updateClock() {
            const timer = getTimeRemaining();

            const interval = setInterval(updateClock, 1000);

            if (timer.timeRemaining > 0) {
              timerHours.textContent = ('0' + timer.hours).slice(-2);
              timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
              timerSeconds.textContent = ('0' + timer.seconds).slice(-2);
            } else {
              timerHours.textContent = '00';
              timerMinutes.textContent = '00';
              timerSeconds.textContent = '00';
              clearInterval(interval);
            }
        }
        updateClock();

    }

    countTimer('18 october 2020');
});
