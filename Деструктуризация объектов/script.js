// Задача 1 Деструктуризация объектов в JavaScript

// В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let color  = options.color;
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.


// let options = {
//     	color: 'red',
//     	width:  400,
//     	height: 500,
//     };



//     let {color, width, height} = options;


//     console.log(options);

//задача 2 Другие имена переменных


// В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let c = options.color;
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.


// let options = {
//     	color: 'red',
//     	width:  400,
//     	height: 500,
//     };


//     let {color: c, width: w, height: h} = options;

//     console.log(options);


// Задача 3 Значения по умолчанию
// В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.


// let options = {
//     	width:  400,
//     	height: 500,
//     };
    
//     let {color = 'black', width, height } = options;
    
//      console.log(options);


// Задача 4
//      В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.


// let options = {
//     	width:  400,
//     	height: 500,
//     };
    
//     let {color: c = 'black', width, height} = options;

//    
//     console.log(options);
