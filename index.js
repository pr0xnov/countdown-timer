// Время для обратного отсчёта
let CountdownTimer = {
  selector: "#timer-1",
  targetDate: new Date("oct 10 2021 17:07:50"),
};


// Обновляем таймер
const countDownFunc = setInterval(function () {
  // Время на данный момент
  let date = new Date().getTime();

  //   Промежуток времени от установленого
  time = CountdownTimer.targetDate - date;

  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  document.querySelector('[data-value="days"]').innerText = days;
  document.querySelector('[data-value="hours"]').innerText = hours;
  document.querySelector('[data-value="mins"]').innerText = mins;
  document.querySelector('[data-value="secs"]').innerText = secs;
  if (time < 0) {
    clearInterval(countDownFunc);
  }
}, 1000);
console.log(countDownFunc);
