const ageCalculator = function (name, yearOfBirth, currentYear) {
    let age = currentYear - yearOfBirth;
return `${name} is ${age} years old.`;
} ;

ageCalculator("Suzie", 1983, 2015);