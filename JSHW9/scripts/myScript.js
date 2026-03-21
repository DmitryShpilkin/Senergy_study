// Универсальная функция для создания HTML-элемента
// Принимает: тег, класс, текст и колбэк для дополнительной настройки
function createElement(tag, className, text, callback) {
  // Создаём новый элемент по указанному тегу (например, div, h3, p)
  const element = document.createElement(tag);

  // Если передан класс, присваиваем его элементу
  if (className) {
    element.className = className;
  }

  // Если передан текст, добавляем его внутрь элемента
  if (text) {
    element.textContent = text;
  }

  // Если передан колбэк, вызываем его и передаём созданный элемент
  // Это позволяет делать с элементом что угодно (например, добавлять вложенные элементы)
  if (callback) {
    callback(element);
  }

  // Возвращаем готовый элемент
  return element;
}

// Колбэк-функция для построения всей структуры поста
// Принимает корневой элемент .post-wrap
function buildPostStructure(postWrap) {
  // Создаём .post-item и сразу настраиваем его через колбэк
  const postItem = createElement('div', 'post-item', null, function(item) {
    // Внутри .post-item создаём .post-item-wrap
    const postItemWrap = createElement('div', 'post-item-wrap', null, function(wrap) {
      // Внутри .post-item-wrap создаём ссылку <a class="post-link">
      const link = createElement('a', 'post-link', null, function(a) {
        // Внутри ссылки создаём заголовок <h3 class="post-title">
        const title = createElement('h3', 'post-title', 'My new div');
        // Добавляем заголовок внутрь ссылки
        a.appendChild(title);
        // Добавляем ссылку внутрь .post-item-wrap
        wrap.appendChild(a);
      });

      // Создаём абзац с текстом <p class="post-content">
      const content = createElement('p', 'post-content', 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel arcu purus.');
      // Добавляем абзац внутрь .post-item-wrap
      wrap.appendChild(content);

      // Добавляем .post-item-wrap внутрь .post-item
      item.appendChild(wrap);
    });
    // Добавляем .post-item внутрь .post-wrap
    postWrap.appendChild(item);
  });
}

// --- Начало выполнения скрипта ---

// Создаём корневой элемент <div class="post-wrap">
const root = document.createElement('div');
root.className = 'post-wrap';

// Вызываем функцию построения структуры, передав ей корневой элемент
buildPostStructure(root);

// Добавляем готовую структуру в <body> страницы
document.body.appendChild(root);