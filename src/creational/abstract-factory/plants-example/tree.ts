import { water } from "./water";

export interface ITree {
  name: string;
  gallonsToWater: number;
  frequencyPerDay: number;

  getWater(): water;
}

export class Tree implements ITree {
  name = "";
  gallonsToWater = 0;
  frequencyPerDay = 0;

  getWater(): water {
    return {
      gallonsToWater: this.gallonsToWater,
      frequencyPerDay: this.frequencyPerDay,
    };
  }
}
