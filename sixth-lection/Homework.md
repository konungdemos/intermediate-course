# Домашнее задание

Создай ветку __dom__. 

1. В файле `app/pages/answers.html` ответь на некоторые вопросы. Каждый ответ оформляется следующим образом:

```html
<div class="pair dom">
	<p class="question">Что такое осень?</p>
	<p class="answer">Это небо.</p>
</div>
``` 

Копировать и вставлять готовые ответы нельзя. Теорию читать можно и нужно. В файле `Additional.md` я дал ссылки на некоторые хорошие источники, обрати на них внимание.

## Вопросы

1. Что такое DOM?
1. Что такое узел (нода)? Какие существуют ноды?
1. Какие есть способы поиска элементов на странице?
1. Что возвращает метод `document.getElementById()`? А метод `document.querySelectorAll()`?
1. Как изменить стили элемента? Какая существует особенность с правилам, в названии которых есть дефис (`border-radius`, `padding-left`)? Какая особенность есть со свойством `float`? Можно ли задать элементу сразу несколько CSS-свойств?
1. Чем отличается __HTMLCollection__ / __NodeList__ от массива?
1. Как обратиться к родителю элемента? А к потомку?
1. Опиши, какие методы и свойства используются для работы с классами?
1. Какие методы создают новый элемент, текстовую ноду? А какие удаляют?
1. Как работает метод `Element.matches()`?
1. Зачем нужна библиотека [Modernizr](https://modernizr.com/)?
1. Чем отличаются `Node.appendChild()`, `Node.insertBefore()` и `Element.insertAdjacentHTML()`?
1. Что находится в свойстве `Element.innerHTML`? А `Element.outerHTML`? Ответь, чем отличаются два следующих типа вставки:

```js
// (1)

const el = document.createElement('p');
el.innerHTML = '<strong>Alert!</strong> Error 404. Page not found.';
document.body.appendChild(el);

// (2)

const el = document.createElement('p');
el.appendChild(document.createTextNode('<strong>Alert!</strong> Error 404. Page not found.'));
document.body.appendChild(el);

```  

---

#### Расчетное время выполнения: 2 - 4 часа.