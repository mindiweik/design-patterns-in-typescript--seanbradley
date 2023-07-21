import { Tree } from "./tree"

export default class MediumTree extends Tree {
  constructor() {
    super()
    this.name = "MediumTree"
    this.gallonsToWater = 2
    this.frequencyPerDay = 3
  }
}
