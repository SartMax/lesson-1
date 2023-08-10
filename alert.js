// let admin;
// let name1;
// name1 = "Джон";
// admin = name1;
// alert(admin);

// alert(`Привет, ${name1} !`);

// let enteredName = prompt ("Как тебя звать ?", "Алина");
// alert(`Тебя зовут ${enteredName}`);

// let comment = prompt('Сколько тебе лет?', 1);

// if (comment <= 18){

// alert ("Да ты еще молода !");

// }else {

// alert ("Фу, старая !");

// }

// let age = Number(" ");
// alert(age); // NaN, преобразование не удалось

// let counter = 1;
// let a = counter++; 
// a += 0  ;
// alert(counter);

// let nameJavaScript = prompt("Какое официльаное название JavaScript ?", " ");
// if (nameJavaScript == "Ecma")
// {
//     alert("Ты прав!");

// }
// else
// {
//     alert ("NO");
// };
// let nameJavaScript = prompt("Какое официльаное название JavaScript ?", 0);

// if (nameJavaScript > 0)
// {
//     alert(1);
// }
// else if (nameJavaScript < 0)
// {
//     alert(-1);
// }
// else
// {
//     alert(0);
// };

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// // }
// let result = prompt("c.LF");
// result = (result == 4) ?'Мало': 'Много';
// alert (result);
// let openOficce = prompt("Time");
// if ( openOficce < 9 || openOficce > 19)
// {
//     alert(" Office is close!");

// }
// else 
// {
//     alert(" Office is open !");
// }

// let passwordOpen = prompt ("Кто там ?");

// if (passwordOpen === "Админ")
// {
//     let password1 = prompt("Прошу пароль");
//     if (password1 === "GAY")
//     {
//         alert("Hello!");
//     }
//     else if (password1 == " " || password1 == null)
//     {
//         alert("Отмена!");
//     }
//     else 
//     {
//         alert("Лживый пидор");
//     }
// }
// else if (passwordOpen == " " || passwordOpen == null)
// {
//     alert ("Cancel");
// }
// else 
// {
//     alert("Я вас не знаю.");
// };
// let user;

// alert(user ?? "Аноним");

// user = 1;
// alert(user ?? "Аноним");

// let chetNumber = 0;
// let n = 10;
// nextPrime:
// for( let i = 2; i <= n; i++)
// {
//     for (let j = 2; j < i; j++) { // проверить, делится ли число..
//         if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//       }
//       alert( i );
// };

// alert("Написаер же меньше 10");

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);
// console.log("hELLO");

// let number = 5;

// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const Object = {
// 	a : 50
// };

// Object.a = 10;
// console.log(Object);

// const obj = {
// 	name: "John",
// 	age: 25,
// 	isMarried: false
// };

// console.log(obj);
// console.log(obj.name);
// // массив - частный случай объекта

// let arr = [1, 2, 3];

// console.log(arr);
// console.log(arr[0]);


// const arr = [1, 2, 3];
// const obj = {0: 1, b: 2, c: 3};
// const obj1 = {
// 	"Alise": 200,
// 	"Anna": 300,
// 	obj2: {
// 		def0: [100, 200, 300],
// 		def: 100
// 	}
// };
// // obj.b = "123";
// console.log(obj1.obj2);
 
let result = confirm("Ты чмо?");
let ak;
let arr = [];
arr [0] = prompt("ИМЯ?");
document.write(arr);
if (result == true)
{
	alert("Поздравляю");
} 
else {
	alert("Пиздишь!");
}
  