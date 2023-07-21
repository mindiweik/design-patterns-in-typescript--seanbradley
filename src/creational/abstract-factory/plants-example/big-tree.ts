import { Tree } from "./tree"

export default class BigTree extends Tree {
  constructor() {
    super();
    this.name = "BigTree"
    this.gallonsToWater = 3
    this.frequencyPerDay = 4
  }
}
