In JavaScript, the difference between Primitive and Non-Primitive (Reference) data types
 comes down to how the computer stores them in memory.

Think of it like the difference between a physical value (like a coin in your pocket) 
and a remote control (a reference to a TV elsewhere).

1. Primitive Data Types
Primitives are the simplest forms of data. They are immutable (cannot be changed 
once created) and are stored "by value."

String: Text data, e.g., "Hello".

Number: Integers and decimals, e.g., 25 or 3.14.

Boolean: Logical values, either true or false.

Undefined: A variable that has been declared but not assigned a value.

Null: An intentional "empty" value.

Symbol: A unique and private identifier.

BigInt: For numbers larger than the standard Number type can handle.

Key Characteristic: When you assign a primitive to a new variable, it makes a complete copy. 
If you change the copy, the original stays the same.

2. Non-Primitive (Reference) Data Types
Non-primitives are more complex. They are mutable (can be changed) and are stored 
"by reference."

Object: A collection of properties (like {name: "Alex", age: 25}).

Array: An ordered list of values (like [1, 2, 3]).

Function: A block of code designed to perform a task.

Key Characteristic: When you assign an object to a new variable, 
you aren't copying the object; you are copying the address (the reference) to where 
that object sits in memory. If you change a property in the "copy," the original changes 
too because they both point to the same "remote control."