// let age = 20;
// let hasvoterId = "no";

// if (age >= 18) {
//     if (hasvoterId == "yes") {
//         alert("You are eligible to vote");
//     } else {
//         alert("You are not eligible to vote get your voter id card");
//     }
// } else {
//     alert("You can't Vote");
// }

// turnery operator

// let isLoggedIn = 0; // if 0 loggedOut 1 loggedIn

// if (isLoggedIn == 0) {
//     alert("You are logged in");
// } else {
//     alert("You are logged out");
// }

// let option = isLoggedIn == 1 ? "logged out" : "logged in";
// //             condition            true          false
// alert(`You are ${option}`);

// switch uses only === operator not == operator

let input = "sjs";

switch (input) {
    case 1: // if(input === 1) conpare type as well as value
        document.write("continue...");
        break;
    case "y": // if(input === "y")
        document.write("continue...");
        break;
    case "yes": // if(input === "yes")
        document.write("continue...");
        break;
    case 0:// if(input === 0)
        document.write("end...");
        break;
    case "n": // if(input === "n")
        document.write("end...");
        break;
    case "no": // if(input === "no")
        document.write("end...");
        break;
    default:
        document.write("Invalid input");

}