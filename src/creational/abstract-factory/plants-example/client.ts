import PlantFactory from './plant-factory'

let PLANT = PlantFactory.getPlant('SmallFlower')
console.log(PLANT)

PLANT = PlantFactory.getPlant("MediumTree")
console.log(PLANT)