import PetTracker from "./pet-tracker";
import IPet from "./ipet";

export class Pet3 implements IPet {
  petTracker: PetTracker;

  constructor() {
    this.petTracker = new PetTracker();
  }

  addPet(name: string, age: number): void {
    this.petTracker.addPet(name, age);
  }
}
