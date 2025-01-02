const numbers: number[] = [1, 2, 3, 4, 5, 6];

numbers.map((num) => {
  const result = num * 2;
  console.log(`Number: ${num}, Result: ${result}`);
  return result;
});

type ApiResponse<T> = {
  [Key in keyof T]: T[Key][];
};

type User = {
  id: number;
  username: string;
  isActive: boolean;
};

type UserResponse = ApiResponse<User>;

const response: UserResponse = {
  id: [1],
  username: ["john_doe"],
  isActive: [true],
};
