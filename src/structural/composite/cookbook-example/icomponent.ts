import Cookbook from './cookbook'
	
export default interface IComponent {
	referenceToParent ?: Cookbook
	
	display(indent: string): void

	detach(): void
}