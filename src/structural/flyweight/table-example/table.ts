// A Formatted Table

import Row from './row'

export default class Table {
	rows: Row[]

	constructor(row_count: number, column_count: number) {
		this.rows = []
		for (let i = 0; i < row_count; i++) {
			this.rows.push(new Row(column_count))
		}
	}

	draw(): void {
		// Draws the table formatted in the console
		let maxRowLength = 0
		const rows: string[] = []
		this.rows.forEach(r => {
			const rowData = r.getData()
			rows.push(`|${rowData}`)
			const rowLength = rowData.length + 1
			if (maxRowLength < rowLength) {
				maxRowLength = rowLength
			}
		})

		console.log('-'.repeat(maxRowLength))
		rows.forEach(r => {
			console.log(r)
		})
		
		console.log("-".repeat(maxRowLength));
	}
}