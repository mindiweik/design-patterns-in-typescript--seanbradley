import IGoat from './igoat'

export default class Goat implements IGoat {
	name: string
	goatColorArray: [string[]]

	constructor(name: string, goatColorArray: [string[]]) {
		this.name = name
		this.goatColorArray = goatColorArray;
	}

	clone(): Goat {
		let array = Object.assign([], this.goatColorArray);
		return new Goat(this.name, array)
	}
}