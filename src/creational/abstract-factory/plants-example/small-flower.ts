import { Flower } from "./flower"

export default class SmallFlower extends Flower {
	constructor() {
		super()
		this.name = "SmallFlower"
		this.gallonsToWater = 1
		this.frequencyPerDay = 2
	}
}