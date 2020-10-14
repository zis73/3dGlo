window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // Timer
  const countTimer = (deadline) => {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const zero = n => (n < 10 ? `0${n}` : n);

        const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        const updateClock = () => {
        const timer = getTimeRemaining();

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
        const interval = setInterval(updateClock, 1000);
  }

  countTimer('15 october 2020');

  //Menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      menuItems = menu.querySelectorAll('ul>li'),
      closeBtn = document.querySelector('.close-btn');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    }

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };
  toggleMenu();

  //popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupClose = document.querySelector('.popup-close'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupContent = document.querySelector('.popup-content');
    
    let count = 0;
    let count2 = 70;
    let popupInterval;
    const popupAnimation = () => {
      popupInterval = requestAnimationFrame(popupAnimation);
      if (count < 560 && count2 < 560) {
        count++;
        count2++;
        popup.style.cssText = `    width: 44rem;
        display: block;
        text-align: center;
        left: 503px;
        height: 470px;
        margin-top: 30px;
        background-color: #19b5fe;
        `;
        popup.style.left = count + 'px';
        popupContent.style.left = count2 + 'px';
      } else {
        cancelAnimationFrame(popupInterval);
        }
        if (screen.width > 768) {
          popupInterval = requestAnimationFrame(popupAnimation);
       } else {
        cancelAnimationFrame(popupInterval);
       }
    };
    
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
          popup.style.display = 'block';
          popupInterval = requestAnimationFrame(popupAnimation);
      });
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    })
  }

  togglePopUp();
});
