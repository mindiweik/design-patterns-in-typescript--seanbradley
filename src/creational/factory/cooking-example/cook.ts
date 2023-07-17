import { recipe } from "./recipe"

// A Cook(ing) Interface
interface ICook {
	ingredients: string[]
	cookingMins: number
	servings: number
	getRecipe(): recipe
}

// The Cook(ing) Base Class
export default class Cook implements ICook {
	ingredients = ['']
	cookingMins = 0
	servings = 0

	getRecipe(): recipe {
		return {
			ingredients: this.ingredients,
			cookingMins: this.cookingMins,
			servings: this.servings,
		}
	}
}
