const getRandomInRange= (min = 1, max = 9) => { // фунция генерации чисел
  return Math.floor(min + Math.random() * (max - min)); //алгоритм генерации: окрушление вниз и 
}

const template = document.querySelector('.template'); //цифры для умножения
const input = document.querySelector('.input'); //окно ввода ответа
const button = document.querySelector('.button'); // кнопка проверки

let firstNumber = getRandomInRange(); // генерация первого числа от 1 до 9
let secondNumber = getRandomInRange(); // генерация второго числа от 1 до 9

template.textContent = `${firstNumber} * ${secondNumber}`; // видимо отображение сгенерированных цифр 

button.addEventListener('click', () => { //функция проверки ответа-сравнение примером
  if (Number(input.value) === firstNumber * secondNumber) { //если в окне ввода число = перемножению сгенерированных чисел, то вернуть поздравление
    alert('Поздравляю, вы верно ответили')
    firstNumber = getRandomInRange(); //если ответ верный-генерация нового первого числа
    secondNumber = getRandomInRange(); ////если ответ верный-генерация нового второго числа
    template.textContent = `${firstNumber} * ${secondNumber}` // видимо отображение сгенерированных цифр 
    input.focus();
  } else { // в любом другом случае вернуть ответ что неверно.
    alert('Попробуйте еще')
  }
  input.value = ''
  //input.focus(); // при неверном ответе перевод курсора автоматически в поле ввода ответа
})
