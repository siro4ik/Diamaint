// Нужно сделать счетчик товаров над корзиной, который будет динамически меняться при добавлении товара в корзину
// добавить расширение области комментариев при нажатии на -> +
// сделать анимацию сменяемости товаров по таймеру или при нажатии ручками (в макете товары показаны разом, нужно сделать акцент на определенном)




document.getElementById('changeNumberButton').addEventListener('click', function() {
  let textElement = document.getElementById('number');
  let currentNumber = parseInt(textElement.textContent);
  let newNumber = currentNumber + 1;
  textElement.textContent = newNumber;
});
