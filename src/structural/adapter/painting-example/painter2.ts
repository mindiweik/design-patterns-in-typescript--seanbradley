export interface IPainter2 {
	doArt(color: string, canvas: [number, number]): boolean
}

export default class Painter2 implements IPainter2 {
	static last_time = Date.now()

	doArt(color: string, canvas: [number, number]): boolean {
		// if not currently commissioned, then paint!
		const now = Date.now()

		if (now > Painter2.last_time + 3500) {
			console.log('Painter 2 painted a picture for you!')
			console.log(`It is ${color}, and the canvas is ${canvas[0]}x${canvas[1]}`)

			Painter2.last_time = now
			return true
		}
		return false // currently commissioned
	}
}