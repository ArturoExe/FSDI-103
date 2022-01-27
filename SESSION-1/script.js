
// let jobTitle=prompt("Enter Job Title");
// let geoLocation=prompt("Enter Geographic Location:");
// let partnerName=prompt("Enter Partner Name:");
// let nChildren=prompt("Please enter number of children:");


// //console.log("You will be a "+ jobTitle+" in "+geoLocation+" ,and married to "+partnerName+" with "+nChildren+" kids.");

// document.write(`You will be a ${jobTitle} in ${geoLocation} ,and married to ${partnerName} with ${nChildren} kids.`);


let firstName=prompt("Enter First Name:");
let secondName=prompt("Enter Second Name:");
let country=prompt("Enter Country:");
let city=prompt("Enter City:");
let zipCode=prompt("Enter Zip Code:");
let date=prompt("Enter Current Day:");
let month=prompt("Enter Current Month")
let year=prompt("Enter Current Year:");
let nationality=prompt("Enter Nationality:");
let fatherName=prompt("Enter Fathers Name:");
let fatherNationality=prompt("Enter Fathers Nationality:");
let motherName=prompt("Enter Mothers Name:");
let motherNationality=prompt("Enter Mothers Nationality:");
let petName=prompt("Enter Pet Name:");
let favFood=prompt("Enter Favorite Food:");
let favMovie=prompt("Enter Favorite Movie");
let isBrother=prompt("Do you have brothers[yes/no]:");
let isCousin=prompt("Do you have cousins[yes/no]:");
let isContinue=prompt("Wish to proceed?[yes/no]...");

let finalText=`<h2>Hello ${firstName} ${secondName} from ${city},${country} the entered zip code is ${zipCode}</h1> <br> Current date ${date}/${month}/${year} <br>
<h2>Personal Data</h2> <br> 
Nationality:${nationality} <br>
Fathers Name:${fatherName} <br>
Fathers Nationality:${fatherNationality} <br>
Mothers Name:${motherName}<br>
Mothers Nationality:${motherNationality}<br>
Pets Name:${petName}<br>
Favorite Food:${favFood}<br>
Favorite Movie:${favMovie}<br>
Brothers:${isBrother}<br>
Cousins:${isCousin}<br>`;
document.write(finalText);
