// ----------- SPREAD OPERATOR - OBJECTS

// const obj1 = { name: "John", age: 22 };
// const obj2 = { name: "Rambo", gender: "M" };

// const obj3 = { ...obj1, ...obj2, phone: "1321521323" };

// const obj4 = { ...obj1 };

// console.log(obj3);

// ----------- SPREAD OPERATOR - ARRAYS

// const arrayOfStrings = ["This", "is", "a", "sentence"];
// console.log(arrayOfStrings);

// console.log(...arrayOfStrings);

// const myString = "This is a sentence";
// const characters = [...myString];

// console.log(characters);
// console.log(myString.split(""));

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const clone = (arr) => [...arr];

// const clonedArray = clone([1, 3, 5]);
// console.log(clonedArray);

// const myAwesomeArray = ["a","b", "c"]
// console.log(myAwesomeArray.some((element) => element === "f"))
// console.log(myAwesomeArray.every((element) => element === "a"))

// const myAwesomeArray=[[1,2], [3,4], [5,6], 7]
// console.log(myAwesomeArray.flat()) //moves to all the same "level"

const myAwesomeArray=[[1,2], [3,4], [5,6], 7]
myAwesomeArray.forEach((elements) => console.log(elements))
 