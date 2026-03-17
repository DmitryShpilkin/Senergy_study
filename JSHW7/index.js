//Напишите функцию, которая проверяет, является ли заданная строка палиндромом
function isPalindrome(str) {
  // Приводим строку к нижнему регистру, чтобы не было разницы между заглавными и строчными буквами
  let lowercasedString = str.toLowerCase();

  // Чистим строку от пробелов, знаков препинания и прочих несущественных символов
  // Регулярное выражение /[^a-zA-Z0-9]/g выбирает ВСЕ символы, которые НЕ являются буквами и цифрами
  // g - флаг для глобальной замены, т.е. замена производится для всех найденных символов
  const cleanedString = lowercasedString.replace(/[^a-zA-Z0-9]/g, '');

  // Разделяем строку на массив отдельных символов с помощью split('')
  // Поворачиваем массив с помощью reverse()
  // Собираем обратно в строку с помощью join('')
  const reversedString = cleanedString.split('').reverse().join('');

  // Проверяем, совпадает ли очищенная строка с её зеркальным отражением
  return cleanedString === reversedString;
}

// Несколько тестовых примеров
console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Madam"));                      // true
console.log(isPalindrome("Hello"));                     // false
console.log(isPalindrome("race car"));                  // true




//Напишите функцию, которая принимает число в качестве параметра и проверяет, является ли число простым или нет
function isPrime(num) {
  // Если число меньше или равно 1, оно не простое
  if (num <= 1) return false;

  // Пробегаемся по всем возможным делителям от 2 до sqrt(num)
  for (let i = 2; i * i <= num; i++) {
    // Если находим делитель, значит число не простое
    if (num % i === 0) return false;
  }

  // Если никаких делителей не нашли, число простое
  return true;
}

// Примеры использования:
console.log(isPrime(11)); // true
console.log(isPrime(4));  // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(1));  // false
console.log(isPrime(-7)); // false



//Напишите функцию, которая определяет возраст человека по дню, месяцу и году рождения
function calculateAge(birthDate) {
  // Получаем текущую дату
  const today = new Date();

  // Предварительно считаем возраст как разницу лет
  let age = today.getFullYear() - birthDate.getFullYear();

  // Получаем разницу в месяцах и днях
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dateDiff = today.getDate() - birthDate.getDate();

  // Если текущий месяц меньше месяца рождения
  // ЛИБО если месяц совпадает, но текущий день меньше дня рождения
  // Значит, день рождения ещё не наступил в текущем году
  if ((monthDiff < 0) || (monthDiff === 0 && dateDiff < 0)) {
    // Уменьшаем возраст на 1, так как день рождения ещё впереди
    age--;
  }

  // Возвращаем точный возраст
  return age;
}

// Примеры использования:
console.log(calculateAge(new Date(1990, 5, 15))); // Дата рождения: 15 июня 1990 г.
console.log(calculateAge(new Date(2000, 11, 31))); // Дата рождения: 31 декабря 2000 г.



//Напишите функцию, которая определяет, была ли введённая дата выходным днём
// Функция для проверки, выходной ли день
function checkIfWeekend(date) {
  // Получаем номер дня недели (0 — воскресенье, 1 — понедельник, ..., 6 — суббота)
  const dayNumber = date.getDay();

  // Проверяем, является ли день субботой (6) или воскресеньем (0)
  if (dayNumber === 0 || dayNumber === 6) {
    console.log("Это выходной!");
  } else {
    console.log("Это рабочий день.");
  }
}

// Примеры использования функции:
checkIfWeekend(new Date());               // Текущая дата
checkIfWeekend(new Date(2023, 9, 1));    // 1 октября 2023 (воскресенье)
checkIfWeekend(new Date(2023, 9, 2));    // 2 октября 2023 (понедельник)
checkIfWeekend(new Date(2023, 9, 7));    // 7 октября 2023 (суббота)