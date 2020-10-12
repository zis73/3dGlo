window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        const zero = n => (n < 10 ? `0${n}` : n);
        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        function updateClock() {
            const timer = getTimeRemaining();

            const interval = setInterval(updateClock, 1000);

            if (timer.timeRemaining > 0) {
              timerHours.textContent = zero(timer.hours);
              timerMinutes.textContent = zero(timer.minutes);
              timerSeconds.textContent = zero(timer.seconds);
            } else {
              timerHours.textContent = '00';
              timerMinutes.textContent = '00';
              timerSeconds.textContent = '00';
              clearInterval(interval);
            }
        }
        updateClock();
    }

    countTimer('19 october 2020');
});
