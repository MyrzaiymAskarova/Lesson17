// Задача 1 Деструктуризация массивов в JavaScript

// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];


// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let [name, surname, department, position, salary  ] = arr;

// console.log(name);
// console.log(surname);
// console.log(department);
// console.log(position);
// console.log(salary);


// Задача 2 Массив из функции

// В следующем коде части массива записываются в соответствующие переменные:

// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// }

// let arr = func();

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.


// function func() {
//     	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
//     }

//     let arr = func();
//     let [name, surname , department, position, salary] = func();

//     console.log(arr);


//Задача 3 Пропуск значений


// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let department = arr[2];
// let position   = arr[3];
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let [,, department, position] = arr;

// console.log(department);
// console.log(position);


// Задача 4 Меньше элементов

// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let name    = arr[0];
// let surname = arr[1];

// let info = arr.slice(2); // все элементы со второго до конца массива
// Переделайте этот код через деструктуризацию согласно изученной теории.


// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let [name, surname ] = arr;

// let info = arr.slice(2);

// console.log(info);


//Задача 5 Значение по умолчанию

// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'джуниор';
// }


// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];
// let [name, surname, department ] = arr;

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'джуниор';
// }


// console.log(arr);


