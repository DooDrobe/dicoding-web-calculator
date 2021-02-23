console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")
alert("Terimakasih.")
//komen
/*komen1
komen2*/

"use strick"; //digunakan untuk memaksa penulisan sintaks js dengan baik benar dan aman
let x = 10;
let y = 5
 
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

x++ //post fix, di print dulu baru ditambah
++x //prefix, ditambah dulu baru di print

console.log(x)

let user = {
    name: {
      first: "Harry",
      last: "Potter",
    },
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.name.first + " " + user.name.last);
console.log("Umur saya " + user.age + " tahun");

let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

//perbandingan
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/


//for of
const myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/* output
Harry
Ron
Hermione
Tom
*/

//for of

//function
function greeting(name, language) {
    if(language === "English") {
        console.log("Good Morning " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour " + name + "!");
    } else {
        console.log("Selamat Pagi " + name + "!");
    }
}

greeting("Harry", "French");

/* output
Bonjour Harry!
*/

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)

/* output
20
*/

function greeting(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/

//Perlu kita perhatikan bahwa, ketika kita lupa menuliskan 
//keyword let, const atau var pada script ketika 
//membuat sebuah variabel, maka variabel tersebut akan menjadi global.
//--------------------------------------------------------------------
//BROWSER OBJECT
const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}