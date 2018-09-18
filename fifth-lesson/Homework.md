# Домашнее задание

Создай ветку __arrays__. 

1. В файле `app/pages/answers.html` ответь на некоторые вопросы. Каждый ответ оформляется следующим образом:

```html
<div class="pair arrays">
	<p class="question">Что такое осень?</p>
	<p class="answer">Это небо.</p>
</div>
``` 

Копировать и вставлять готовые ответы нельзя. Теорию читать можно и нужно. В файле `Additional.md` я дал ссылки на некоторые хорошие источники, обрати на них внимание.

## Вопросы

1. Что такое массив?
1. Чем массив отличается от объекта?
1. Что такое callback?
1. Чем отличаются методы `Array.of` и `Array.from`?
1. Как можно узнать длину массива?
1. Почему методы `pop/push` быстрее, чем `shift/unshift`?
1. Дополни следующий код. 1) Как обратиться к свойству `name`? 2) Как задать свойство `age` равное `41`? 

```javascript

// (1)

const user = [{name: 'Bruce', surname: 'Doe'}];

```
```html
// Формат ответа:

<p class="answer">
	(1) Что такое осень...<br>
	(2) Это небо...<br>
	...
</p>

```

2. В __app/pages__ создай файл __todo.js__.

В этом файле создается объект `todo`, который включает в себя несколько свойств и методов:

* Все дела хранятся в свойстве-массиве `tasks`, который будет содержать объекты с несколькими свойствами: `title`, `description`, `dueDate`;
* Метод `addTask(title, desc, dueDate)`, добавляет дела в массив;
* Метод `getTasks(date)`, сверяет `dueDate` объектов и переданный `date` и возвращает массив объектов-дел или сообщение о том, что таск не найден. Если дата не передана, то возвращает все таски. Для перебора можно использовать [`Array.prototype.filter()`](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) или [`Array.prototype.forEach()`](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
* Метод `deleteTask(title)` удаляет объект из массива или возвращает сообщение о том, что таск не найден. Для поиска лучше использовать [`Array.prototype.find()`](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
* Все методы имеют базовую обработку ошибок -- проверка на некорректный тип переданных данных, вызов метода без аргументов, недостаточное количество аргументов.

### Пример работы

```javascript
todo.addTask('Feed the cat', 'He will die if I don\'t do it', '26-06-2018'); 
// Добавлен таск: {title: 'Feed the cat', description: 'He will die if I don\'t do it', dueDate: '26-06-2018'}

todo.getTasks('26-06-2018');
// [{title: 'Feed the cat', description: 'He will die if I don\'t do it', dueDate: '26-06-2018'}]

todo.getTasks('27-06-2018'); // Тасков на 27-06-2018 нет.

todo.deleteTask('Vote Obama'); // Таск 'Vote Obama' не найден.

todo.deleteTask('Feed the cat'); // Таск удален.
```

---

#### Расчетное время выполнения: 2 - 4 часа.