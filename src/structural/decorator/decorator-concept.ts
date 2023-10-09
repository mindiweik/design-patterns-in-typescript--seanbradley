// Decorator Concept Sample Code

interface IComponent {
	method(): string
}

class Component implements IComponent {
	method(): string {
		return 'Component Method'
	}
}

class Decorator implements IComponent {
	#object: IComponent

	constructor(object: IComponent) {
		this.#object = object
	}

	method(): string {
		return `Decorator Method(${this.#object.method()})`
	}
}

// The Client
const COMPONENT = new Component()
console.log(COMPONENT.method())

// The component can be decorated
const DECORATED = new Decorator(COMPONENT)
console.log(DECORATED.method())

// The decorated component can be decorated again
const DECORATED2 = new Decorator(DECORATED)
console.log(DECORATED2.method())