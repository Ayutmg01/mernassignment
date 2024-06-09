// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };
function getAgeGroup(person){
const age = person.age;
if ( age >= 0 && age<= 12)
    {
        return 'child';
    }
else if (age >= 13 && age <= 19)
    {
        return 'teen';
    }
else if (age >= 19 && age <= 59)
    {
        return 'Adult';
    }
else if (age >= 60)
    {
        return 'Senior';
    }
else{
    return 'Invalid age';
}
}
console.log(getAgeGroup(person1));


// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };
function totalInStock(fruits)
{
  let sum = 0 ;
  for(let key in fruits)
 {
    if(typeof fruits[key] === "number")
        {
            sum = sum + fruits[key];
        }
 }
 return sum ;
}
console.log(totalInStock(inventory2));


// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
const stuArray = Object.values(students3);
console.log(stuArray);


// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };
