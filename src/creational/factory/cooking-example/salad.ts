import Cook from './cook'

export default class Salad extends Cook {
	constructor() {
		super()
		this.ingredients = ['lettuce', 'veggies', 'dressing']
		this.cookingMins = 5
		this.servings = 2
	}
}