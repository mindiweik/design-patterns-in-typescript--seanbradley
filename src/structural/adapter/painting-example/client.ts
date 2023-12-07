import Painter1 from './painter1'
import Painter2Adapter from './painter2-adapter'

const totalPaintings = 6
let counter = 0

const requestPainting = () => {
	// produce 6 paintings to fulfill the orders as painters are able
	const numberOfBrushes = Math.floor(Math.random() * 6) + 1
	const mainColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white']
	const mainColor = mainColors[Math.floor(Math.random() * mainColors.length)]
	const canvasWidth = Math.floor(Math.random() * 10) + 1
	const canvasHeight = Math.floor(Math.random() * 10) + 1

	let painter = new Painter1()

	let success = painter.paint(numberOfBrushes, mainColor, [canvasWidth, canvasHeight])
	if (success) {
		counter++
	} else {
		// try another painter
		console.log('Painter 1 was already painting, checking with painter 2')

		painter = new Painter2Adapter()
		success = painter.paint(numberOfBrushes, mainColor, [canvasWidth, canvasHeight])

		if (success) {
			counter++
		} else {
			console.log('Painter 2 was already painting, checking with painter 1')
		}
	}
}

// wait between asking for each painting
const interval = setInterval(() => {
	requestPainting()
	if (counter >= totalPaintings) {
		clearInterval(interval)
		console.log(`${totalPaintings} paintings commissioned successfully! All orders should be fulfilled.`)
	}
}, 1200)