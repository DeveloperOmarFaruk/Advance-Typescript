"use strict";
{
    // const rollNumber: number[] = [2, 4, 6, 8];
    const rollNumber = [2, 4, 6, 8];
    // const studentName: string[] = ["Rahima", "Jobbar", "Kodu", "Sokina"];
    const studentName = ["Rahima", "Jobbar", "Kodu", "Sokina"];
    // const marriedStatus: boolean[] = [true, false, false, false];
    const marriedStatus = [true, false, false, false];
    const user = [
        {
            name: "Modhu Shudon Datta",
            age: 49
        },
        {
            name: "Ghoseti Begum",
            age: 35
        }
    ];
    const couple = ["Mr. Husband", "Ms. Wife"];
    const userDetails = [124567, { name: "Abdur Rahim", age: 45 }];
    const useResponse = {
        status: "Success",
        data: {
            id: "181-15-2094",
            name: "Omar Faruk",
            email: "omar@gmail.com",
            age: 25
        },
        message: "Hello I am Mr. Omar Faruk",
    };
    // ========================
    // Generic Function
    // ========================
    function getArray(items) {
        return [...items];
    }
    // Using the Generic Function with Different Types
    const numberArray = getArray([1, 4, 6]);
    const stringArray = getArray(["Apple", "Banana", "Orange"]);
    const bolleanArray = getArray([true, false, true]);
    // Adding new items to the returned arrays
    numberArray.push(4);
    stringArray.push("date");
    bolleanArray.push(false);
    console.log(numberArray);
    console.log(stringArray);
    console.log(bolleanArray);
    // ========================
    // Generic Multiple Function
    // ========================
    function mergeObjects(obj1, obj2) {
        return Object.assign(Object.assign({}, obj1), obj2);
    }
    const person = { name: "John", age: 30 };
    const job = { title: "Developer", company: "TechCrop" };
    const employee = mergeObjects(person, job);
    console.log(employee);
    function getItemById(items, id) {
        return items.find(item => item.id === id);
    }
    const products = [
        {
            id: 1,
            name: "Laptop"
        },
        {
            id: 2,
            name: "Phone"
        },
        {
            id: 3,
            name: "Tablet"
        }
    ];
    const result = getItemById(products, 2);
    console.log(result);
    // ==============================
    // Constraint with keyof Operator
    // ==============================
    function getProperty(obj, key) {
        return obj[key];
    }
    const personDetails = {
        name: "Alice",
        age: 30,
        job: "Enginer"
    };
    const personName = getProperty(personDetails, "name");
    const personAge = getProperty(personDetails, "age");
    console.log(personName);
    console.log(personAge);
}
