//Lecture: variables
// var name = 'John';
// console.log(name);

// var lastName = "Smith";
// console.log(lastName); 

// var age = 26;
// console.log(26);

// var fullAge = true;
// console.log(fullAge);



//Lecture: variables 2
// var name = 'John';
// var age = 26;

// console.log(name + age);

// var job, isMarried; 

// job = 'teacher';
// isMarried = false;

// console.log(name + ' is ' + age + " years old and works as a " + job + ". When asked is he is married, he answered: " + isMarried);

// var lastName = prompt('What is the last name?');
// console.log(lastName);



//Lecture: Operators
// var now = 2017
// var birthYear = now - 26;
// console.log(birthYear);



//Lecture: if/else statements 
// var name = 'John';
// var age = 26;
// var isMarried = 'no';

// if(isMarried === 'yes') {
//     console.log(name + ' is married!');
// } else {
//     console.log(name + ' is single and ready to mingle!');
// }


//Lecture: boolean logic and switch
// var age = 20;

// if (age <= 19) {
//     console.log('John is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log("John is a young man");
// } else {
//     console.log("John is a man");
// }

// var job = 'teacher';

// job = prompt('What does John do?');

// switch(job) {
//     case 'teacher':
//         console.log('John teaches kids');
//         break;
//     case 'driver':
//         console.log('John drives a cab');
//         break;
//     case 'cop':
//         console.log('John helps fight crime');
//         break;
//     default:
//         console.log("John does something else");
// }

//First coding challenge
// var height1 = 66;
// var height2 = 72; 

// var age1 = 18;
// var age2 = 17;

// function game () {
//     if ((age1 * 5 + height1) > (age2 * 5 + height2)) {
//         console.log('Player1 wins!');
//     } else {
//         console.log("Player2 wins!");
//     }
// }

// game();

function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var myAge = calculateAge(1991);


function yearUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' can retire in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.')
    }
    
}

yearUntilRetirement('Will', 1991);