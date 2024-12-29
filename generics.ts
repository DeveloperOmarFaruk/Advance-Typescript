// Generic Type
// type GenericsArray<param> = Array<param>;
type GenericsArray<T> = Array<T>;

// const rollNumber: number[] = [2, 4, 6, 8];
const rollNumber: GenericsArray<number> = [2, 4, 6, 8];

// const studentName: string[] = ["Rahima", "Jobbar", "Kodu", "Sokina"];
const studentName: GenericsArray<string> = ["Rahima", "Jobbar", "Kodu", "Sokina"];


// const marriedStatus: boolean[] = [true, false, false, false];
const marriedStatus: GenericsArray<boolean> = [true, false, false, false];


const user:GenericsArray<{name:string, age: number}> = [
    {
        name: "Modhu Shudon Datta",
        age: 49
    },
    {
        name: "Ghoseti Begum",
        age: 35
    }
]


// Generic Tuple
type GenericsTuple<X,Y> = [X, Y]

const couple: GenericsTuple<string, string> = ["Mr. Husband", "Ms. Wife"];

const userDetails: GenericsTuple<number, { name: string, age: number }> = [124567, { name: "Abdur Rahim", age: 45 }]

// Generic Interface

interface ApiResponse<T>{
    status: string;
    data: T;
    message?: string;
}


interface User{
    id: string;
    name: string;
    email: string;
    age: number;
}

const useResponse: ApiResponse<User> = {
    status: "Success",
    data: {
        id: "181-15-2094",
        name: "Omar Faruk",
        email: "omar@gmail.com",
        age: 25
    },
    message: "Hello I am Mr. Omar Faruk",
}

// Generic Function
function getArray<T>(items: T[]): T[]{
    return [...items];
}

// Using the Generic Function with Different Types
const numberArray = getArray<number>([1, 4, 6]);
const stringArray = getArray<string>(["Apple", "Banana", "Orange"]);
const bolleanArray = getArray<boolean>([true, false, true]);

// Adding new items to the returned arrays
numberArray.push(4);
stringArray.push("date");
bolleanArray.push(false);


console.log(numberArray);
console.log(stringArray);
console.log(bolleanArray);

// Generic Multiple Function
function mergeObjects<T, U>(obj1: T, obj2: U): T & U{
    return { ...obj1, ...obj2 };
}

const person = { name: "John", age: 30 };
const job = { title: "Developer", company: "TechCrop" };

const employee = mergeObjects(person, job);
console.log(employee);