import Elevation from './elevation'
import Climb from './climb'
import Descend from './descend'

const start = Elevation(0)
const midway = Elevation(7000)
const peak = Elevation(14000)

console.log(Climb(start, midway).elevation)
console.log(Climb(midway, 10000).elevation)
console.log(Descend(peak, midway).elevation)
console.log(Descend(Climb(start, midway), 5000).elevation)

// Check that the original values are unchanged
console.log(start.elevation)
console.log(midway.elevation)
console.log(peak.elevation)