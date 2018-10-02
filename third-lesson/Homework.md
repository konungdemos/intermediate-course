# Домашнее задание

Создай ветку __functions__. 

1. В файле `app/pages/answers.html` ответь на некоторые вопросы. Каждый ответ оформляется следующим образом:

```html
<div class="pair functions">
	<p class="question">Что такое осень?</p>
	<p class="answer">Это небо.</p>
</div>
``` 

Копировать и вставлять готовые ответы нельзя. Теорию читать можно и нужно. В файле `Additional.md` я дал ссылки на некоторые хорошие источники, обрати на них внимание.

## Вопросы

1. Зачем нужны функции?
1. Сколько параметров можно передать функции?
1. Что случится, если передать в функцию меньше параметров, чем нужно? А если больше? Объясни на примере функции `add(a, b)`.
1. Возможно ли для параметра указать значение по умолчанию? Назови два способа?
1. Что такое область видимости?
1. Чем отличается Function Declaration от Function Expression?
1. Что такое замыкание?
1. Далее указан полный код программы. Что мы увидим в консоли браузера? Почему? Что может вернуть функция makeNoize?

```javascript
const makeNoize = function(message) {
	console.log(message);
}
```

* Почему при выполнении указанного кода возникают ошибки?

```javascript

// (1)

function person() {
	const name = 'John';
	const surname = 'Doe';
}

console.log(`Hello, ${name} ${surname}!`);

// (2)

const addThree = (num) => {
	const number = 0;
	number = num;

	return +number + 3;
}

// (3)

first(); // error
second(); // 'Second one'

const first = () => {
	console.log('First one');
}

function second() {
	console.log('Second one');
}

// (4)

const name = 'John';

(() => {
	const surname = 'Doe';
	console.log(`${name} ${surname}`);
})();

console.log(`${name} ${surname}`);

```

```html
// Формат ответа:

<p class="answer">
	(1) Что такое осень...<br>
	(2) Это небо...<br>
	...
</p>

```

2. В `app/pages` создай файл `functions.js` и напиши в нем несколько функций. Все функции должны быть стрелочными, предпочтительно использование [Function Expression](https://learn.javascript.ru/function-declaration-expression#function-expression). Файл должен проходить тесты по команде `npm test`.

К написанию каждой функции подходи с умом. Если есть сомнения по поводу того, как все должно работать -- реши задачу на бумаге, напиши алгоритм. Ты вообще помнишь, как возвести число в степень? Как считается факториал? Как найти десятое число Фибоначчи? Нет? Тогда разберись сначала в этом, а потом уже садись за код. Во всех функциях должны быть реализовани проверки входного параметра -- на NaN и undefined.

## Функции

* Функция `add(a, b)`, которая принимает два числа и возвращает их сумму:

```javascript
// Функция должна работать и с числовым и со строчным типом данных.

add(20, 50); // 70
add(100, "2"); // 102, а не 1002

```

* Функция `length(r)`, которая принимает радиус окружности и возвращает длину окружности:

```javascript

length(10); // 62.83185307179586

```

* Функция `discr(a, b, c)`, которая принимает три числа и возвращает дискриминант:

```javascript
// Используем формулу b^2 - 4ac. Небольшой подвох в том, что JavaScript не понимает символ "^"

discr(2, 5, -7) // 81

```

* Функция `square(num)`, которая принимает число и возвращает его квадрат:

```javascript

square(2); // 4
square(10); // 100

```

* (!) Функция `sumTo(num)`, которая возвращает сумму чисел до указанного числа:

```javascript

sumTo(10); // 55, так как 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
sumTo(100); // 5050

```

* (!) Функция `fib(num)`, которая возвращает указанное [число Фибоначчи](https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8):

```javascript

// fib(0) и fib(1) возвращают 1

fib(5); // 8
fib(10); // 89

```

Обрати особое внимание на то, что задания с пометкой `(!)` решаются с использованием [рекурсии](https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8F#%D0%92_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8). Дальше мы научимся их решать другим способом, однако понимание рекурсии очень важно для программиста, поэтому постарайся потратить на эти задания больше времени, при необходимости обратись к менторам за подсказкой. В файле `Additional.md` есть отдельный пункт "__Рекурсия__", в котором собраны вспомогательные материалы. Их желательно изучать именно в таком порядке, в котором они даны.

---

#### Расчетное время выполнения: 4 - 6 часов.