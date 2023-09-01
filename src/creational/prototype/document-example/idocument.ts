// Prototype Concept Sample Code
import Document from './document'

export default interface IDocument {
	// interface with clone method
	clone(mode: number): Document

	// The clone, deep or shallow.
	// It is up yo you to determine the details.
}