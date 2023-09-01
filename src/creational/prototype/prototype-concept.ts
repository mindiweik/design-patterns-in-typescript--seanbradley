interface IPrototype {
	// interface with clone method
	
	clone(): this
	// The clone is deep or shallow.
	// It is up to you how to implement the details.
}

class MyClass implements IPrototype {
	// A concrete class
	field: number[]

	constructor(field: number[]) {
		this.field = field // any value of any type
	}

	clone() {
		// return Object.assign({}, this) // shallow copy
		return JSON.parse(JSON.stringify(this)) // deep copy
	}
}

// The Client
// Create an object containing an array
const OBJ1 = new MyClass([1, 2, 3, 4])
console.log(`OBJ1: ${JSON.stringify(OBJ1)}`)

const OBJ2 = OBJ1.clone() // clone
console.log(`OBJ2: ${JSON.stringify(OBJ2)}`)

// INVALID - We didn't return an instance of `MyClass`:
// OBJ3 = OBJ2.clone()

// Change the value of one of the array elements in OBJ2
// Depending on your clone method, either a shallow or 
// deep copy will be performed

OBJ2.field[1] = 101

// Comparing OBJ1 and OBJ2
console.log(`OBJ2: ${JSON.stringify(OBJ2)}`)
console.log(`OBJ1: ${JSON.stringify(OBJ1)}`)