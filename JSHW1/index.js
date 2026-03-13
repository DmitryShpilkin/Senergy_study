// Начинаем нашу домашнюю работу
console.log("Домашняя работа по итогам урока 1");

// Определяем переменные разных типов данных
const name = "Алексей";          // Строковая переменная (string), хранит имя
const age = 25;                 // Числовой тип (number), хранит возраст
const isMarried = false;         // Булевый тип (boolean), хранит статус брака

// Выведем наши переменные в консоль
console.log(`Имя: ${name}.`);      // Шаблонная строка с именем
console.log(`Возраст: ${age}.`);    // Шаблонная строка с возрастом
console.log(`Есть супруг/супруга: ${isMarried}.`); // Шаблонная строка с брачным статусом

// Проверим типы наших переменных
console.log(`Тип данных переменных name, age, isMarried: ${typeof name}, ${typeof age}, ${typeof isMarried}.`);

// Определим специальные значения и посмотрим их поведение
const notDefined = undefined;       // Специальное значение undefined
const empty = null;                 // Специальное значение null
const uniqueId = Symbol("id");      // Уникальное значение типа Symbol
const bigNumber = BigInt('1234567890123456789012345678901234567890'); // Большое целое число (bigint)

// Посмотрим значения и типы специальных переменных
console.log(`Значение: ${notDefined}, тип: ${typeof notDefined}`); // undefined и его тип
console.log(`Значение: ${empty}, тип: ${typeof empty}`);            // null и его тип (object!)

// Символы требуют особого подхода при выводе
console.log(`Значение: ${uniqueId.description || 'без описания'}, тип: ${typeof uniqueId}`); // Символы имеют специальный вывод

// Большие числа обрабатываются штатно
console.log(`Значение: ${bigNumber}, тип: ${typeof bigNumber}`); // Большой номер и его тип (bigint)

// Глобальные и локальные переменные
const globalVariable = "Я глобальная!"; // Эта переменная доступна повсюду в коде

// Локальная переменная внутри функции
function showLocalVariable() {
  const localVariable = "Я локальная!"; // Видна только внутри функции
  console.log(localVariable);           // Внутри функции видим локальную переменную
}

// Выполняем функцию и показываем локальную переменную
showLocalVariable();

// Показываем глобальную переменную
console.log(globalVariable);