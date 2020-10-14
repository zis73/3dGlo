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
      popupBtn = document.querySelectorAll('.popup-btn');
    
    let count = 0;
    let popupInterval;
    const popupAnimation = () => {
      count++;
      popup.style.cssText = `position: relative`;
      popup.style.top = count + 'px';
      if (count < 300) {
        popupInterval = requestAnimationFrame(popupAnimation);
      } else {
        cancelAnimationFrame(popupInterval);
            }
          };

    popupInterval = requestAnimationFrame(popupAnimation);
    
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
          popup.style.display = 'block';
          popupAnimation();
      });
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    })
  }
    

  togglePopUp();
});
