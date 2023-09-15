// A Game Class that uses the Leadboard Singleton

import Leaderboard from "./leaderboard";
import IGame from "./igame";

export class Game3 implements IGame {
  leaderboard: Leaderboard;

  constructor() {
    this.leaderboard = new Leaderboard();
  }

  addWinner(position: number, name: string): void {
    this.leaderboard.addWinner(position, name);
  }
}
