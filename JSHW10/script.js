// Универсальная функция для получения данных с любого URL.
// Оборачивает fetch в try/catch для централизованной обработки ошибок.
// Возвращает распарсенный JSON или null в случае ошибки.
async function fetchData(url) {
    try {
        // Выполняем сетевой запрос
        const response = await fetch(url);

        // Проверяем, был ли ответ успешным (статус 200-299)
        if (!response.ok) {
            // Если нет — выбрасываем ошибку с кодом статуса
            throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
        }

        // Парсим тело ответа как JSON и возвращаем результат
        return await response.json();
    } catch (error) {
        // Ловим любые ошибки: сетевые или при парсинге JSON
        console.error('Ошибка при получении данных:', error);
        return null; // Возвращаем null, чтобы сигнализировать об ошибке
    }
}

// 1. Функция для получения списка пользователей.
// Использует универсальную функцию fetchData для запроса.
async function fetchUsers() {
    return await fetchData('https://jsonplaceholder.typicode.com/users');
}

// 2. Функция для получения подробностей о первом пользователе.
// Демонстрирует цепочку асинхронных вызовов.
async function fetchUserDetails() {
    try {
        console.log('--- Пример 1: Пользователь ---');

        // Получаем список пользователей
        const users = await fetchUsers();

        // Проверяем, что данные успешно получены и список не пуст
        if (!users || users.length === 0) {
            throw new Error('Список пользователей пуст или не загружен.');
        }

        // Берём первого пользователя из массива
        const user = users[0];

        // Выводим данные в консоль
        console.log('Данные пользователя:', user);
    } catch (error) {
        // Обрабатываем возможные ошибки на любом этапе
        console.error('Ошибка при получении данных пользователя:', error);
    }
}

// 3. Функция для одновременной загрузки данных с нескольких API.
// Использует Promise.all для параллельного выполнения запросов.
async function fetchMultipleData() {
    try {
        console.log('\n--- Пример 2: Параллельная загрузка (Promise.all) ---');

        // Запускаем оба запроса параллельно.
        // Promise.all дождётся завершения обоих промисов.
        const [posts, comments] = await Promise.all([
            fetchData('https://jsonplaceholder.typicode.com/posts'),
            fetchData('https://jsonplaceholder.typicode.com/comments')
        ]);

        // Проверяем, что оба запроса выполнились успешно (не вернули null)
        if (posts && comments) {
            // Выводим первые 3 поста и первых 3 комментария для краткости
            console.log('Posts:', posts.slice(0, 3));
            console.log('Comments:', comments.slice(0, 3));
        }
    } catch (error) {
        console.error('Ошибка при одновременной загрузке данных:', error);
    }
}

// 4. Пример "синтаксического сахара": переписывание then/catch на async/await.
// Эта функция делает то же самое, что и цепочка .then().catch(), но выглядит чище.
async function getData() {
    try {
        console.log('\n--- Пример 3: Async/Await вместо then/catch ---');

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
        }

        const data = await response.json();

        // Выводим первые 5 элементов массива todos
        console.log('Todos:', data.slice(0, 5));
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

// --- Точка входа: запускаем все примеры по очереди ---
fetchUserDetails();      // Запуск первого примера
fetchMultipleData();     // Запуск второго примера (параллельная загрузка)
getData();               // Запуск третьего примера (демонстрация async/await)