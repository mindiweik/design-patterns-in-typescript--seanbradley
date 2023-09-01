// A sample document to be used in the Prototype example
import IDocument from './idocument'

export default class Document implements IDocument {
	name: string
	array: [number[], number[]]

	constructor(name: string, array: [number[], number[]]) {
		this.name = name
		this.array = array
	}

	clone(mode: number): Document {
		// This clone method uses different copy techniques
		let array
		if (mode === 2) {
			// results in a deep copy of the Document
			array = JSON.parse(JSON.stringify(this.array))
		} else {
			// default, results in a shallow copy of the Document
			array = Object.assign([], this.array)
		}

		return new Document(this.name, array)
	}
}
