// A Row in the Table

import Column from './column'

export default class Row {
	columns: Column[]

	constructor(column_count: number) {
		this.columns = []
		for (let i = 0; i < column_count; i++) {
			this.columns.push(new Column())
		}
	}

	getData(): string {
		// Format the fow before returning it to the table
		let ret = ''
		this.columns.forEach(c => {
			ret = `${ret}${c.getData()}|`
		})
		return ret
	}
}