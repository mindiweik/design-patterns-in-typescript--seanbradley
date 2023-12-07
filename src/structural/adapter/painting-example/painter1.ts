export interface IPainter1 {
	paint(numberOfBrushes: number, mainColor: string, canvasSize: [number, number]): boolean
}

export default class Painter1 implements IPainter1 {
	static last_time = Date.now()

	paint(numberOfBrushes: number, mainColor: string, canvasSize: [number, number]): boolean {
		// if not currently commissioned, then paint!
		const now = Date.now()
		if (now > Painter1.last_time + 2000) {
			console.log('Painter 1 painted a picture for you!')
			console.log(`It is ${mainColor}, and the canvas is ${canvasSize[0]}x${canvasSize[1]}`)
			console.log(`It took ${numberOfBrushes} brushes to paint this for you.`)

			Painter1.last_time = now
			return true
		}
		return false // currently commissioned
	}
}