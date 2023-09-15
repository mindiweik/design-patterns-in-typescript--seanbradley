// Singleton Concept Sample Code

class Singleton {
	// The Singleton Class
	static instance: Singleton
	id: number

	constructor(id: number) {
		this.id = id
		if (Singleton.instance) {
			return Singleton.instance // return the existing instance if present
		}

		Singleton.instance = this
	}
}

// The Client
// All uses of the singleton point to the same original object

const OBJECT1 = new Singleton(1)
const OBJECT2 = new Singleton(2)

console.log(OBJECT1 === OBJECT2) // true
console.log(OBJECT1.id) // returns 1
console.log(OBJECT2.id) // returns 1