// 'use strict';

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callBack) {
  
//     return callBack(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });


// makePizza("Royal Grand");
// makePizza("Ultracheese");

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function(elem) {
//     totalPrice += elem;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//   let result = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       result.push(number);
//     }
//   });

//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// let totalPrice = 0;
// const calculateTotalPrice = (orderedItems) => {
//   orderedItems.forEach((item) => {totalPrice += item;
//   });
//   return totalPrice;
// };
  
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach = (numbers) => {
    if (numbers > value) {
      filteredNumbers.push(numbers);
    }
  };

  return filteredNumbers;
}


    
    console.log(filterArray([1, 2, 3, 4, 5], 3));
    console.log(filterArray([1, 2, 3, 4, 5], 4));
    console.log(filterArray([12, 24, 8, 41, 76], 38));
    console.log(filterArray([12, 24, 8, 41, 76], 20));
    