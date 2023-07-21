import { water } from "./water"

export interface IFlower {
	name: string
	gallonsToWater: number
	frequencyPerDay: number

	getWater(): water
}

export class Flower implements IFlower {
	name = ""
	gallonsToWater = 0
	frequencyPerDay = 0

	getWater(): water {
		return {
			gallonsToWater: this.gallonsToWater,
			frequencyPerDay: this.frequencyPerDay,
		}
	}
}