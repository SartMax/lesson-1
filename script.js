// if (4 == 9) 
// {
// 	console.log("ок!");
// } else {
// 	console.log("error");
// }

// let num = +prompt("Number", " ");

// switch(num) {
// case 49: 
// 	alert("Неверно");
// 	break;
// case 100:
// 	alert("Неверно");
// 	break;
// case 50: 
// 	alert("Круть");
// 	break;  
// default:
// 	alert("Дурак1");
// 	break;  
// }

// let nickName = prompt("Enter your NickName", " ");
// let personPassword = +prompt("Enter password", " ");

// if (nickName == "Sart" && personPassword == "123")
// {
// 	alert("HELLO MY GOD!");
// } else {
// 	alert ("HELLO NIGA!");
// }

// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
// 	console.log("Done!");
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let num = 0;

// while (num < 5)
// {
	
// 	console.log(num);
// 	num++;
// }
 
// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

// for(let i = 1; i < 10; i++)
// {
// 	if(i === 6)
// 	{
// 		// break;
// 		continue;
// 	}

// 	console.log(i);

// }

// for(let i = 0; i < 1; i++) {
// 	let num = "*";
// 	for(let j = 0; j < 4; j++) {
// 		console.log(num);
// 		num += "*";
// 	}
// }

// let result = "";
// const length = 7;

// for(let i = 1; i < length; i++)
// {
// 	for(let j = 0; j < i; j++)
// 	{
// 		result += "*";
// 	}
// 	result += "\n";
// }

// console.log(result);

first: for(let i = 0; i < 3; i++) 
{
	console.log(`First level: ${i}`);

	for(let j = 0; j < 3; j++)
	{
		console.log(`Second level: ${j}`);

		for(let k = 0; k < 5; k++)
		{
			if (k === 2)
			{
				break first;
			}
			console.log(`Third level: ${k}`);
		}	
	}	
}
	