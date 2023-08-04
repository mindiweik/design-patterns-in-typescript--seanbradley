import Dance from "./dance";
import Dancer from "./dance-builder";

export class FoxtrotDirector {
  static construct(): Dance {
    return new Dancer().setSteps(50).setMusicStyle("foxy").getResult();
  }
}
