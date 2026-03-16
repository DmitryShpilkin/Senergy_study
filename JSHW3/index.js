//Скрипт: определение четверти часа
// Получаем количество минут от пользователя
//Закомментировал потому, что работает только в браузере, а не в Node.js среде(выдаёт ошибку: prompt is not defined)
//const minutes = Number(prompt("Введите количество минут (от 0 до 59):"));
// Преобразуем введённую строку в число
//const number = Number(userInput);

const minutes = 37 
// Определяем квартал часа
if (minutes >= 0 && minutes <= 15) {
  console.log("Первая четверть");
} else if (minutes <= 30) { // Достаточно проверить верхнюю границу предыдущего блока
  console.log("Вторая четверть");
  } else if (minutes <= 45) { // Аналогично предыдущему блоку
  console.log("Третья четверть");
  } else if (minutes <= 59) { // Последняя граница должна проверять максимальное значение
  console.log("Четвертая четверть");
  } else {
  console.log("Некорректное значение минут");
}

// Дополнительная проверка на валидность введённых данных
// Проверка на диапозон не требуется, т.к. выполняется в самом условном операторе
if (isNaN(minutes)) {
  console.log("Ошибка: введено некорректное число.");
}


//Скрипт: определение времени года
// Запрашиваем у пользователя номер месяца
// let monthInput = prompt("Введите номер месяца (от 1 до 12):");
// Преобразуем введенный текст в целое число
//const month = Number(monthInput);

const month = 12; // Пример: май
// Проверяем корректность введенного значения
if (isNaN(month) || !Number.isInteger(month) || month < 1 || month > 12) {
    console.error("Некорректный номер месяца! Нужно ввести число от 1 до 12.");
} else {
    // Логика определения сезона по номеру месяца
    if (month >= 1 && month <= 2 || month == 12) {
      console.log(`Номер месяца ${month}. Это зима.`);
    } else if (month >= 3 && month <= 5) {
      console.log(`Номер месяца ${month}. Это весна.`);
    } else if (month >= 6 && month <= 8) {
      console.log(`Номер месяца ${month}. Это лето.`);
    } else if (month >= 9 && month <= 11) {
      console.log(`Номер месяца ${month}. Это осень.`);
    }
  }


//Скрипт: определение времени года через switch
// Запрашиваем у пользователя номер месяца
// let monthInput = prompt("Введите номер месяца (от 1 до 12):");
// Преобразуем введенный текст в целое число
// const month = Number(monthInput);

const anotherMonth = 9; // Пример: сентябрь
// Проверяем корректность введенного значения
if (isNaN(anotherMonth) || !Number.isInteger(anotherMonth) || anotherMonth < 1 || anotherMonth > 12) {
  console.error("Некорректный номер месяца! Нужно ввести число от 1 до 12.");
} else {
  // Используем switch для определения сезона
  switch (anotherMonth) {
    case 12:
    case 1:
    case 2:
      console.log(`Номер месяца ${anotherMonth}. Это зима.`);
      break;
    case 3:
    case 4:
    case 5:
      console.log(`Номер месяца ${anotherMonth}. Это весна.`);
      break;
    case 6:
    case 7:
    case 8:
      console.log(`Номер месяца ${anotherMonth}. Это лето.`);
      break;
    case 9:
    case 10:
    case 11:
      console.log(`Номер месяца ${anotherMonth}. Это осень.`);
      break;
    default:        
      console.error("Что-то пошло не так при определении сезона."); // Обычно сюда попасть невозможно
  }
}


//Скрипт: квадрат или куб числа
// Запрашиваем у пользователя число
//let userInput = prompt("Введите число:");
// Преобразуем введённую строку в число
//const number = Number(userInput);

const number = 3; // Пример числа
// Проверяем корректность введённого значения
if (isNaN(number) || !Number.isInteger(number)) {
    console.error("Введённые данные некорректны. Введите целое число.");
  } else {
    // Выполняем нужную операцию в зависимости от чётности числа
    if (number % 2 === 0) {
      // Если число чётное, выводим квадрат числа
      console.log(`Квадрат числа ${number}: ${number ** 2}`);
    } else {
      // Если число нечётное, выводим куб числа
      console.log(`Куб числа ${number}: ${number ** 3}`);
    }
}
