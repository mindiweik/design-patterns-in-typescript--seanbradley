import IComponent from './icomponent'
import Cookbook from './cookbook'

export default class Recipe implements IComponent {
	name: string
	referenceToParent?: Cookbook

	constructor(name: string) {
		this.name = name
	}

	display(indent: string): void {
		console.log(`${indent}-- ${this.name}`)
	}

	detach(): void {
		console.log('Detaching leaf from parent composite')
		if (this.referenceToParent) {
			this.referenceToParent.delete(this)
		}
	}
}