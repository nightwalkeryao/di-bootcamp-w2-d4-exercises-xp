/**
 * @author Yao Kan KOUASSI
 * @description DI Bootcamp Exercises XP W2-D4
 * @date 30 dec. 2022
 */

// Exercises XP

// Exercise 1 : Information

// Part I : function with no parameters
// 1. Create a function called infoAboutMe() that takes no parameter.
// 2. The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutMe() {
    console.log("My name is Yao")
}
// Call the function.
infoAboutMe()

// Part II : function with three parameters
// 1. Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// 2. The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”) 
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
}
// 3. Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// Exercise 2 : Tips

// 1. Create a function named calculateTip() that takes no parameter.
// 2. Inside the function, use prompt to ask John for the amount of the bill. 
// 3. Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
// 4. Console.log the tip amount and the final bill (bill + tip).

function calculateTip() {
    let bill = Number(prompt("What is the amount of the bill?"))
    console.log(`Bill amount: ${bill}`)
    let tip
    if (bill < 50)
        tip = bill * 20 / 100
    else if (bill >= 50 && bill <= 200)
        tip = bill * 15 / 100
    else
        tip = bill * 10 / 100
    console.log(`Tip amount: ${tip}`)
    console.log(`Final bill: ${(bill + tip)}`)
}
// 5. Call the calculateTip() function.
calculateTip()


// Exercise 3 : Find the numbers divisible by 23

// 1. Create a function call isDivisible() that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// 4. At the end, console.log the sum of all numbers that are divisible by 23.
// 5. Bonus: Add a parameter divisor to the function.
function isDivisible(divisor) {
    let numbers = []
    for (let i = 0; i <= 500; i++) {
        if (i % divisor == 0)
            numbers.push(i)
    }
    console.log(`Outcome: ${numbers.join(' ')}`)
    console.log(`Sum: ${numbers.reduce((a, b) => a + b)}`)
}
isDivisible(23)
isDivisible(3)
isDivisible(45)


// Exercise 4 : Shopping List

// 1. Add the stock and prices objects to your js file.
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}
const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}
// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"]
// 3. Create a function called myBill() that takes no parameters. 
// 4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// 6. Bonus: If the item is in stock, decrease the item’s stock by 1

/**
 * @abstract Calculates the total price of a shopping list and decreases the stock for selected items
 * @returns number - the total price of the shopping list
 */
function myBill() {
    let totalPrice = 0;
    shoppingList.forEach(item => {
        if (prices.hasOwnProperty(item))
            totalPrice += Number(prices[item])
        if (stock.hasOwnProperty(item) && stock[item] > 0)
            stock[item]--
    })
    return totalPrice;
}
// 5. Call the myBill() function.
let total = myBill()
console.log(`Total: ${total}`)



// Exercise 5 : What’s in my wallet ?

// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// 2. In the function, determine whether or not you can afford the item.
function changeEnough(itemPrice, amountOfChange) {
    let sum = 0.25 * amountOfChange[0]
        + 0.1 * amountOfChange[1]
        + 0.05 * amountOfChange[2]
        + 0.01 * amountOfChange[3]

    return sum >= itemPrice
}
// 3. Change format is [quarters, dimes, nickel, penny]
// 4. Illutsration
console.log(`For itemPrice: 14.11 and change: [2,100,0,0], changeEnough ? : ${changeEnough(14.11, [2, 100, 0, 0])}`)
console.log(`For itemPrice: 0.75 and change: [0,0,20,5], changeEnough ? : ${changeEnough(0.75, [0, 0, 20, 5])}`)



// Exercise 6 : Vacations Costs

// 1. Define a function called hotelCost(). 
// The hotel costs $140 per night. The function should return the total price of the hotel. 
function hotelCost(numberOfNights) {
    return numberOfNights * 140
}

// 2. Define a function called planeRideCost().
// The function should return a different price depending on the location.
function planeRideCost(destination) {
    let prices = {
        london: 183,
        paris: 220,
        other: 300
    }

    return prices.hasOwnProperty(destination.toLowerCase())
        ? prices[destination.toLowerCase()]
        : prices.other
}

// 3. Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car. 
function rentalCarCost(numberOfDays) {
    let total = numberOfDays * 40
    if (numberOfDays > 10)
        total -= total * 5 / 100
    return total
}

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// 5. Call the function totalVacationCost()
// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
(function totalVacationCost() {
    // User input number of nights
    let input,
        numberOfNights = 0,
        destination = "",
        numberOfDays = 0

    do {
        input = prompt("How many nights would you like to stay in the hotel?")
        if (!isNaN(input))
            numberOfNights = Number(input)
    } while (numberOfNights === 0)
    // User input destination
    do {
        input = prompt("What is your destination?")
        if (null !== input && /^\w+(\s?\w?)*$/.test(input))
            destination = input.trim()
    } while (destination === "")
    // User input number of days
    do {
        input = prompt("How many days would you like to rent the car?")
        if (!isNaN(input))
            numberOfDays = Number(input)
    } while (numberOfDays === 0)

    console.log(`Number of nights: ${numberOfNights} / Hotel costs: ${hotelCost(numberOfNights)}`)
    console.log(`Destination: ${destination} / Plan ride costs: ${planeRideCost(destination)}`)
    console.log(`Number of Days: ${numberOfDays} / Car rental costs: ${rentalCarCost(numberOfDays)}`)
    console.log(`Total vacation cost: ${(hotelCost(numberOfNights) + planeRideCost(destination) + rentalCarCost(numberOfDays))}`)
})()