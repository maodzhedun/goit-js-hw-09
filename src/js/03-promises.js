import Notiflix from "notiflix";

const form = document.querySelector('.form');
form.addEventListener('submit,', onSubmit);
console.dir(form);

function onSubmit(event) {

}






function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
  }, delay)
  
}


// createPromise(position, delay)
//   .then(({ position, delay }) => {
//     Notiflix.Report.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Report.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });