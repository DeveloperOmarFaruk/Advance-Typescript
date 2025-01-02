"use strict";
const numbers = [1, 2, 3, 4, 5, 6];
numbers.map((num) => {
    const result = num * 2;
    console.log(`Number: ${num}, Result: ${result}`);
    return result;
});
const response = {
    id: [1],
    username: ["john_doe"],
    isActive: [true],
};
