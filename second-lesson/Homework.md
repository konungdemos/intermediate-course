# Домашнее задание

Создай ветку __loops__. 

1. В файле `app/pages/answers.html` ответь на некоторые вопросы. Каждый ответ оформляется следующим образом:

```html
<div class="pair loops">
	<p class="question">Что такое осень?</p>
	<p class="answer">Это небо.</p>
</div>
``` 

Копировать и вставлять готовые ответы нельзя. Теорию читать можно и нужно. В файле `Additional.md` я дал ссылки на некоторые хорошие источники, обрати на них внимание.

## Вопросы

1. Что такое "алгоритм"? Какие ты знаешь типы алгоритмов?
1. Зачем нужны циклы? Какие виды циклов ты знаешь? В чем их основные отличия?
1. Что делают операторы `++i` и `i++` и в чем их отличие?
1. Что такое "итерация"?
1. Как называются и чем отличаются операторы `||` и `&&`?
1. Для чего используется `break`? Почему в конструкции switch нужно использовать `break` для каждого `case`?
1. Почему при выполнении указанного кода возникают ошибки?

```javascript

// (1)

const i = 0;

while (i <= 10) {
	console.log(i);
}

// (2)

for (j = 0; j <= 10; j++); {
	console.log(j);
}

// (3)

const year = 1996;

switch (year) {
	case 1996: 
	console.log('1996');

	case 1997: 
	console.log('1997');

	case 1998: 
	console.log('1998');

	default: 
	console.log('Year is undefined :(');
}

// (4)

const number = prompt('What is the number?', '0'); // Ввели 1

console.log(number + 10); // 110

```

```html
// Формат ответа:

<p class="answer">
	(1) Что такое осень...<br>
	(2) Это небо...<br>
	...
</p>

```

2. В `app/pages` создай файл `loops.js` и реши в нем некоторые задания:

* Перепиши цикл `for` на `while`:

```javascript

for (let k = 10; k >= 0; --k) {
	if (k % 2 === 0) {
		console.log(k);
	}
}

```

* Перепиши `if...else` на тернарный оператор `?`:

```javascript
const isAdmin = true;

if (isAdmin) {
	alert('Привет, Admin!');
} else {
	alert('Ты точно не Admin');
}

```
* Напиши примитивную проверку логина и пароля, которая используется в роутерах, опираясь на схему:

![Схема работы](https://github.com/MaximumStart/essential-course/blob/master/second-lesson/scheme.jpg)

Красное — модальные окна (alert, prompt),
Зеленое — введенные пользователем данные.

* Перепиши `if...else` на `switch`:

```javascript

const age = +prompt('Сколько тебе лет?', '12');

if (age === 12) {
	alert('Слишком мало :(');
} else if (age === 16) {
	alert('Почти достаточно :[');
} else if (age === 18) {
	alert('Вот сейчас в самый раз! :)');
} else {
	alert('Возраст не определен %)');
}

```

---

#### Расчетное время выполнения: 3 - 4 часа.