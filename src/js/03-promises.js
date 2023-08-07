import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();

  let delay = Number(event.target.delay.value);
  let step = Number(event.target.step.value);
  let amount = Number(event.target.amount.value);
  
  for (let position = 1; position <= amount; position += 1) { 
    console.log(position, amount, delay);
    createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Report.success(`✅ Fulfilled promise ${position} in ${delay}ms`, '');
        })
        .catch(({ position, delay }) => {
          Notiflix.Report.failure(`❌ Rejected promise ${position} in ${delay}ms`, '');
        });
        delay += step;
  } 

}

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    // const promise = { position, delay };

    return new Promise((resolve, reject) => {
            setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
}