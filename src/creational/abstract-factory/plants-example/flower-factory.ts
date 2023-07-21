import SmallFlower from "./small-flower"
import MediumFlower from "./medium-flower"
import BigFlower from "./big-flower"
import { IFlower } from "./flower"

export default class FlowerFactory {
	static getFlower(flower: string): IFlower {
		if (flower == 'SmallFlower') {
			return new SmallFlower()
		} else if (flower == 'MediumFlower') {
			return new MediumFlower()
		} else if (flower == 'BigFlower') {
			return new BigFlower()
		} else {
			throw new Error('No Flower Found')
		}
	}
}
