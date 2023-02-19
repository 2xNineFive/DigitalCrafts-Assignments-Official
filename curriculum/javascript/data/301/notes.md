### Javascript Data 301
## Understanding Immutability comes down to understanding how data is stored in memory. 

**Definition of Immutability**
Primitive Data Types are immutable. Immmutability means that whenever a variable is declared, it lives at a unique address in memory and if it is later reinitialized or reassigned, it will live a new, unique address. If a variable is initialized by reference, instead of by value, its unique address points to the referred address. 

**List of Primitive Data Types**
* strings
* numbers
* booleans
* null
* undefined

**Examples**
```
let age = 32; // initializes by value, it gets a unique address (e.g. Hx78)
let marysAge = age; // initializes by reference, it gets a unique address (Rw33) but this address doesnt hold a value... it simply points to Hx78
age = 33 // with reinitialization the new value is stored at a new address (e.g. Xa1)
```

**Definition of Mutability**
Collections of primitive of data types are mutable, which means that when they are modified or updated the data is not stored at a new address... it remains at the original address when the variable was first declared. 

**List of Collections**
* arrays
* objects

