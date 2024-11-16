// ДЗ 10.1. Картка користувача
const person = {
    name: 'Andrii',
    age: 21,
    city: 'Odessa',
    getInfo: function () {
        return `Ім'я: ${this.name}\nВік: ${this.age}\nМісце проживання: ${this.city}`;
    }
};

console.log(person.getInfo());