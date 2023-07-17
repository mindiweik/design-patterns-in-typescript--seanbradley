import Cook from './cook'

export default class Pizza extends Cook {
	constructor() {
		super()
		this.ingredients = ['dough', 'sauce', 'cheese', 'toppings']
		this.cookingMins = 30
		this.servings = 6
	}
}