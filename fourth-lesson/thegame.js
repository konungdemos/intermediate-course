// Описываем объект Волшебника

const wizard = {
    name: 'Muhammad Avdol',
    gender: 'Male',
    power: 'Fire',
    health: 600,
    energy: 200,
    height: 188,
    weight: 90,
    appearance: {
    	skin: 'black',
        necklace: 'Yellow rings',
        coat: 'Heavy overcoat with sleeves of elbow length and a scarf',
        pants: '#998c84',
        boots: '#000000'
    },
    beatSomeone(person) {
    	if (person.name === 'Muhammad Avdol') {
    		return 'No!';
    	} else {
    		person.health -= 50;
    		person.energy -= 10;
    	}
    	if (person.health <= 0) {
    		return 'Person died.'
    	}    		
   		if (person.energy <= 0) {
   			return 'Person can\'t fight'
   		}
    	return `${person.name} (${person.id}) lost 50 HP points and 10 energy points`;
    }
};

// Описываем функцию-конструктор для Рыцарей

function Knight(id, health, energy) {
	this.id = id;
	this.health = health;
	this.energy = energy;
	this.name = 'Jean Pierre Polnareff';
	this.gender = 'Male';
	this.power = 'Rapier master';
	this.height = 185;
	this.weight = 78;
	this.clothes = {
		skin: 'white',
		necklace: false,
		coat: 'Fitted sleeveless black top',
		pants: 'Yellow ones',
		boots: 'Ordinary black boots'
	};
this.beatSomeone = function(person) {
	if (person.name === 'Jean Pierre Polnareff') {
		return 'Nani?';
	} else {
		person.health -= 20;
		person.energy -= 30;

		if (person.health <= 0) {
			return 'Person died'
		}    		

		if (person.energy <= 0) {
			return 'Person can\'t fight'
		}

		return `${person.name} lost 20 HP points and 30 energy points`;
	}
};
}

/*
    Каждое присваивание переменной создает нового
    рыцаря, которому мы передаем id, health и energy
    Остальные параметры у них будут одинаковы.

    Создаем Рыцаря (1) и Рыцаря (2)
*/

const firstKnight = new Knight(1, 200, 120);
const secondKnight = new Knight(2, 60, 10);

/*
=====================================================================
    Тело программы закончилось -- мы имеем одного волшебника (wizard)
    и двух рыцарей (firstKnight и secondKnight).
    Весь код ниже -- примеры работы
=====================================================================
*/

/*
    Получить свойство: названиеОбъекта.названиеСвойства
    Получить метод: названиеОбъекта.названиеМетода
    Вызвать метод: названиеОбъекта.названиеМетода()
*/

// Получаем значение здоровья Рыцаря (1)
firstKnight.health // 60

// Рыцарь (2) бьет Волшебника
secondKnight.beatSomeone(wizard) // 'Muhammad Avdol lost 20 HP points and 30 energy points'


/*
    Для уверенности в своей победе Рыцарь (2) решил
    увеличить запас здоровья Рыцаря (1).

    Для этого он получил значение здоровья первого
    рыцаря и переписал значение на большее
*/

// Столько было
console.info(firstKnight.health); // 60

firstKnight.health = 300;

// Столько стало
console.info(firstKnight.health); // 300

/*
    Маг оказался хитрее, поэтому решил запретить
    рыцарям сопротивляться, удалив у них метод
    beatSomeone
*/

delete firstKnight.beatSomeone; // true
delete secondKnight.beatSomeone; // true

// При попытке ударить мага, появится ошибка:

firstKnight.beatSomeone(wizard); // TypeError: firstKnight.beatSomeone is not a function
secondKnight.beatSomeone(wizard); // TypeError: secondKnight.beatSomeone is not a function