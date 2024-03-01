import IComponent from './icomponent'

export default class Cookbook implements IComponent {
	referenceToParent?: Cookbook
	name: string
	components: IComponent[]

	constructor(name: string) {
		this.name = name
		this.components = []
	}

	display(indent: string): void {
		console.log(`${indent}-- ${this.name}`)

		this.components.forEach(c => {
			c.display(indent + '-->')
		})
	}

	attach(component: IComponent): void {
		component.detach()
		component.referenceToParent = this
		this.components.push(component)
	}

	delete(component: IComponent): void {
		const index = this.components.indexOf(component)
		if (index > -1) {
			this.components.splice(index, 1)
		}
	}

	detach(): void {
		if (this.referenceToParent) {
			this.referenceToParent.delete(this)
			this.referenceToParent = undefined
		}
	}
}