import { IPainter1 } from './painter1'
import Painter2 from './painter2'

export default class Painter2Adapter implements IPainter1 {
	#painter: Painter2

	constructor() {
		this.#painter = new Painter2()
	}

	paint(numberOfBrushes: number = 1, mainColor: string, canvasSize: [number, number]): boolean {
		const success = this.#painter.doArt(mainColor, canvasSize)
		if (success) console.log(`It took ${numberOfBrushes} brushes to paint this for you.`)
		return success
	}
}