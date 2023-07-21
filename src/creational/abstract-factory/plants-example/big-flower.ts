import { Flower } from "./flower"

export default class BigFlower extends Flower {
  constructor() {
    super()
    this.name = "BigFlower"
    this.gallonsToWater = 3
    this.frequencyPerDay = 4
  }
}
