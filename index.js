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

// ДЗ 10.3. Книга контактів
const contacts = {
    users: [
        { name: 'Valentin', phoneNumber: '+3800000000001', mail: 'valentin@example.com' },
        { name: 'Alex', phoneNumber: '+3800000000002', mail: 'alex@example.com' },
        { name: 'Popov', phoneNumber: '+3800000000003', mail: 'popov@example.com' },
    ],

    findContacts: function (findUser) {
        return this.users.find(user => user.name === findUser);
    },

    addContact: function (name, phoneNumber, mail) {
        this.users.push({ name, phoneNumber, mail });
        return this.users;
    }
}

console.log(contacts.findContacts('Popov'));
console.log(contacts.addContact("Vlad", "+3800000000004", "vlad@example.com"));