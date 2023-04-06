//01;
const num_1 = prompt("enter first num: ");
const num_2 = prompt("enter second num: ");
console.log(Math.max(num_1, num_2));

//02;
const sign_check = prompt("Enter a num: ");
if (sign_check > 0) {
    alert("The sign is +");
} else {
    alert("The sign is -");
}

//03;
const num1 = prompt("enter first num: ");
const num2 = prompt("enter second num: ");
const num3 = prompt("enter third num: ");
const num4 = prompt("enter fourth num: ");
const num5 = prompt("enter fifth num: ");
console.log(Math.max(num1, num2, num3, num4, num5));

//04
for (let i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is odd");
    }
}

//05
const grade = prompt("Enter a garde : ");
if (grade <= 60) {
    console.log(" your grade is F");
} else if (grade >= 60 && grade <= 70) {
    console.log(" your grade is D");
} else if (grade >= 70 && grade <= 80) {
    console.log(" your grade is C");
} else if (grade >= 80 && grade <= 90) {
    console.log(" your grade is B");
} else {
    console.log(" your grade is A");
}

// 06;
for (let j = 1; j < 101; j++) {
    if (j % 3 == 0 && j % 5 == 0) {
        console.log("FizzBuzz");
    } else if (j % 3 == 0) {
        console.log("Fizz");
    } else if (j % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(j);
    }
}

// 07
let string = "";
for (let x = 1; x < 7; x++) {
    for (let y = 1; y < x; y++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);