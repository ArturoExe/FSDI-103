// Excercise #1.
// let name="Arturo";
// let email="asd@gmail.com";
// let password="al1lde";
// let age=20;
// let country="Mexico";
// let salaryMonth=5000;

// console.log(`Hi ${name} your email is ${email} and your anual income is  $${salaryMonth*12} `);


//Exercise #2
// let name=prompt("Enter your name:");
// let email=prompt("Enter your email:");
// let password=prompt("Enter a password");
// let age=prompt("Enter your age");
// let country=prompt("Enter what country are you from:");
// let salaryMonth=prompt(`${name} enter your monthly income:`)

// console.log(`Hi ${name} your email is ${email} and your anual income is  $${salaryMonth*12} `);

//Assigment 2
let product=prompt("Enter product name:");
let quantity=prompt("Enter Quantity:");
let price=prompt("Enter the price:");
let finalPrice=((quantity*price)*0.16+(price*quantity));

document.write(`<h1>The final price is ${finalPrice} and the tax is ${price*quantity*0.16}</h1>`);