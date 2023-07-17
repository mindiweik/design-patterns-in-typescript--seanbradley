import Cook from './cook'

export default class Pasta extends Cook {
		constructor() {
			super()
			this.ingredients = ['pasta', 'sauce', 'veggies', 'meat']
			this.cookingMins = 20
			this.servings = 4
		}
}