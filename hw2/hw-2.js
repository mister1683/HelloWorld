let a = 10;
alert(a);
a = 20;
alert(a);

const iPhoneReleaseYear = 2007;
alert(iPhoneReleaseYear);

const jsCreator = "Brendan Eich";
alert(jsCreator);

let num1 = 10, num2 = 2;
alert(num1 + num2);
alert(num1 - num2);
alert(num1 * num2);
alert(num1 / num2);

let result = 2 ** 5;
alert(result);

let b = 9;
let c = 2;
let remainder = b % c;
alert(remainder);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет ?");
alert(age);

let user = {
    name: "Bob",
    age: 40,
    isAdmin: true,
};
user["city of residence"] = "New York";
user.age = 35;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let userName = prompt("Как вас зовут?");
alert('Привет, ${userName}!');