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

// ДЗ 10.2. Отримання парних чисел з масиву
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const newArr = arr.filter(evenNumbers);

function evenNumbers(numbers) {
    return numbers % 2 === 0;
}

console.log(newArr);