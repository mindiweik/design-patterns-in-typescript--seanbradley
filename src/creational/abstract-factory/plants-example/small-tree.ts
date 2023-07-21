import { Tree } from "./tree"

export default class SmallTree extends Tree {
  constructor() {
    super();
    this.name = "SmallTree"
    this.gallonsToWater = 1
    this.frequencyPerDay = 2
  }
}
