import Goat from './goat'

const goat1 = new Goat('Susie', [['red', 'white', 'blue']])
const goat2 = goat1.clone()
goat2.name = 'Freddy'
goat2.goatColorArray[0][1] = 'brown'
goat2.goatColorArray = [['orange', 'green']]
console.log(goat1)
console.log(goat2)
console.log()

const goat3 = goat2.clone()
goat3.name = 'Mark'
goat3.goatColorArray[0][0] = 'purple'
console.log(goat1)
console.log(goat2)
console.log(goat3)
console.log()
