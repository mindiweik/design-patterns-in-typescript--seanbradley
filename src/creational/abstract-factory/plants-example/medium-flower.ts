import { Flower } from "./flower"

export default class MediumFlower extends Flower {
  constructor() {
    super()
    this.name = "MediumFlower"
    this.gallonsToWater = 2
    this.frequencyPerDay = 3
  }
}
