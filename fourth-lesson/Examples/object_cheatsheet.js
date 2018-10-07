// Как создавать объекты?

// (1)

const person = {
	eyesColor: 'Green',
	gender: 'Male',
};

person.hobbie = 'Programming';
person.age = 46;
person.eyesColor = 'Brown';

console.log(person);

// (1.1)

const title = 'Some title';
const description = 'Some description';

// ES5
const todo = {
	title: title,
	description: description,
}

//ES6
const todo = {
	title,
	description,
}

console.log(todo);

// (2)

const Student = function(age, laptop) {
	this.age = age;
	this.hasLaptop = laptop;
}

const student1 = new Student(21, true);
const student2 = new Student(19, false);
const student3 = new Student(22, true);

console.log(student1);
console.log(student2);
console.log(student3);

// Как читать свойства или методы?

const person = {
	eyesColor: 'Green',
	gender: 'Male',
	alert() {
		alert(alert);
	}
};

console.log(person.gender); // 'Male'
person.alert();

// Как изменять свойства или методы?

const person = {
	eyesColor: 'Green',
	gender: 'Male',
	alert() {
		alert(alert);
	}
};

person.gender = 'Female';

person.alert = function() {
	console.log('another');
}

// Как удалять свойства или методы?

const person = {
	eyesColor: 'Green',
	gender: 'Male',
	alert() {
		alert(alert);
	}
};

delete person.gender;
delete person.alert;