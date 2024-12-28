let value: unknown = 'Hello, Type Assertions'

let lenths = (value as string).length;
console.log(`String length is: ${lenths}`)