import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const refs = {
  inputField: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}

const { days, hours, minutes, seconds } = refs;

refs.startBtn.addEventListener('click', startTimer, {once: true});
refs.startBtn.disabled = true;

let selectedDate  = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDate <= new Date()) {
      Notiflix.Report.failure('Please choose a date in the future', '');
      refs.startBtn.disabled = true;
    } else {
      Notiflix.Report.success('You choose valid data', '');  
      refs.startBtn.disabled = false;
    }
  },
};

//init function
flatpickr(refs.inputField, options);

function startTimer() {
  const intervalId = setInterval(() => {
    const deltaTime = selectedDate - Date.now();
    const timeComponents = convertMs(deltaTime);
    if (deltaTime <= 1000) { 
      clearInterval(intervalId);
    }
    timer(timeComponents);


  }, 1000);
}

function timer(elements) { 
  days.textContent = addLeadingZero(elements.days);
  hours.textContent = addLeadingZero(elements.hours);
  minutes.textContent = addLeadingZero(elements.minutes);
  seconds.textContent = addLeadingZero(elements.seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) { 
return String(value).padStart(2, 0);
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}