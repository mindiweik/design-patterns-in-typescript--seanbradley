// Builder
import Dance from "./dance"

interface IDancer {
	setSteps(number: number): this
	setMusicStyle(string: string): this
	getResult(): Dance
}

export default class Dancer implements IDancer {
	dance: Dance

	constructor() {
		this.dance = new Dance()
	}

	setSteps(number: number): this {
		this.dance.steps = number
		return this		
	}

	setMusicStyle(string: string): this {
		this.dance.musicStyle = string
		return this
	}

	getResult(): Dance {
		return this.dance
	}
}
