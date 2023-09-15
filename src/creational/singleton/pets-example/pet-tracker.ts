export default class PetTracker {
  static instance: PetTracker;
  #table: {
    [id: string]: number;
  } = {};

  constructor() {
    if (PetTracker.instance) {
      return PetTracker.instance;
    }

    PetTracker.instance = this;
  }

  public addPet(name: string, age: number): void {
    this.#table[name] = age;
  }

  public print(): void {
    console.log("-----------Pets-----------");
    for (const key in this.#table) {
      console.log(`|\t${key}\t|\t${this.#table[key]}\t|`);
    }
    console.log();
  }
}