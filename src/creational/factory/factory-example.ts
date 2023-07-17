// The Factory Concept

interface Pet {
	name: string
	age: number
	type: string
	loves: string[]
}

type NotFound = 'No pet found'
const notFound: NotFound = 'No pet found'

class FurBaby implements Pet {
	name = 'furBaby'
	age = 0
	type = 'animal'
	loves = ['family', 'naps']
}

class Rosie extends FurBaby {
	constructor() {
		super()
		this.name = 'Rosie'
		this.age = 11
		this.type = 'dog'
		this.loves = ['walks', 'food', 'rabbits']
	}
}

class Rigby extends FurBaby {
	constructor() {
		super()
		this.name = 'Rigby'
		this.age = 5
		this.type = 'dog'
		this.loves = ['frisbees', 'dog parks', 'playtime']
	}
}

class Buzz extends FurBaby {
	constructor() {
		super()
		this.name = 'Buzz'
		this.age = 2
		this.type = 'cat'
		this.loves = ['fish', 'sunbathing', 'bird watching']
	}
}

class CreatePet {
	static createPet(petName: string): Pet | NotFound {
		if (petName === 'Rosie') {
			return new Rosie()
		} else if (petName === 'Rigby') {
			return new Rigby()
		} else if (petName === 'Buzz') {
			return new Buzz()
		} else {
			return notFound
		}
	}
}

// Client Call
const PET = CreatePet.createPet('')
console.log(PET)
