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