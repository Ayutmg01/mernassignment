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
console.log('Q1:',getAgeGroup(person1));


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
console.log('Q2:',totalInStock(inventory2));


// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
const stuArray = Object.values(students3);
console.log('Q3:', stuArray);


// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };
function checkValues(detail)
{
    for(let key in detail)
        {
            if (detail[key] ===null || detail[key] === undefined)
                {
                    return false;
                }
        }
        return true;
}
console.log('Q4:', checkValues(details4));

// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 350.00
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };
function average(products){
    let totalPrice = 0;
    let productCount = 0;

for (let product in products){
    totalPrice += products[product].price;
    productCount++;
}
return(totalPrice/ productCount).toFixed(2);
}
console.log('Q5',average(products5));

// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };
function high(scores){
    return Math.max(...Object.values(scores));

}
console.log('Q6',high(scores6));


// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };

function getAverageSalary(employees) {
    let totalSalary = 0;
    let employeeCount = 0;

    for (let emp in employees) {
        totalSalary += employees[emp].salary;
        employeeCount++;
    }

    return totalSalary / employeeCount;
}
console.log('Q7',getAverageSalary(employees7))

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };



// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };
function totalPrice(order){
    const quantity = order.quantity;
    const price = order.price;
    const total = quantity * price;
    return total;
}
console.log('Q8',totalPrice(order9));


// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };
function totalAmount(expenses)
{
    const expenseValues = Object.values(expenses);
    let sum = 0;
    for ( let expense of expenseValues)
        {
            sum += expense; 
        }
        return sum ;
}
console.log('Q10',totalAmount(expenses10));