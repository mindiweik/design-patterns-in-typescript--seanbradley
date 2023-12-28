// The facade pattern concept

class SubSystemClassA {
	// A hypothetically complicated class
	method(): string {
		return 'A'
	}
}

class SubSystemClassB {
	// A hypothetically complicated class
	method(value: string): string {
		return value
	}
}

class SubSystemClassC {
	// A hypothetically complicated class
	method(value: { C: number[] }): { C: number[] } {
		return value
	}
}

class Facade {
	// A simplified facade offering the services of subsystems
	subSystemClassA(): string {
		// Uses the subsystem's method
		return new SubSystemClassA().method()
	}

	subSystemClassB(value: string): string {
		// Uses the subsystem's method
		return new SubSystemClassB().method(value)
	}

	subSystemClassC(value: { C: number[] }): { C: number[] } {
		// Uses the subsystem's method
		return new SubSystemClassC().method(value)
	}
}

// The Client
// Calling potentially complicated subsystems directky
console.log(new SubSystemClassA().method())
console.log(new SubSystemClassB().method('B'))
console.log(new SubSystemClassC().method({ C: [1, 2, 3] }))

// or using the simplified facade instead
const FACADE = new Facade()
console.log(FACADE.subSystemClassA())
console.log(FACADE.subSystemClassB('B'))
console.log(FACADE.subSystemClassC({ C: [1, 2, 3] }))