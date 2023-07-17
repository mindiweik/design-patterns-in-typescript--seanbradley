import Pasta from "./pasta"
import Pizza from "./pizza"
import Salad from "./salad"
import ICook from "./cook"

export default class CookingFactory {
	static getCooking(food: string): ICook {
		if (food == 'Pasta') {
			return new Pasta()
		} else if (food == 'Pizza') {
			return new Pizza()
		} else {
			return new Salad()
		}
	}
}
