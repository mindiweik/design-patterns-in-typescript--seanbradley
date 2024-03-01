import Folder from './folder'

export default interface IComponent {
	// A component interfece describint the common
	// fields and methods of leaves/composites
	referenceToParent?: Folder
	
	dir(indent: string): void
	// A method each Leaf and composide container should implement

	detach(): void
	// Called before a lead is attached to a composite
}