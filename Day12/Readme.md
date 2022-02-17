Completed work on the debugging module of the Javascript algorithm and data structure course and learnt the following
- Javascript recognises 6 immutable data types: boolean, string, null. number, undefined, symbol and 1 mutable data type - object. Arrays are objects
- Thought about the 3*2 array loop


Completed  with the Basic Data structure module
- push appends to the end while unshift appends to the start
- arr.splice(start, num_of_items_to_delete, items_to_add)
- arr,slice(start, end_exclusive); to copy
- spread operator (...arr) to unload/copy/paste content of an array
- use arr.indexOf(elem) to check if an array has an elem. It returns index or -1
- [string] this is accessing an object. [number] this is accessing an array
- Bracket notation is very useful when you need to access object dynamically. 
users.hasOwnProperty('Alan') is the same as 'Alan' in users
- use for(let user in users) to loop throught keys in an object
- use Object.keys() to return all the keys in an object into an array

Time : 3 hrs

Started the basic algorithm module
- learnt that Math.max(arg) expects a number as arg. If you use an array,it will return NaN. Use spread operator...array to unload the content of the array so Math.max sees number. ie Math.max(...arr)