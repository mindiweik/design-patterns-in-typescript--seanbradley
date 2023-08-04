import Dance from "./dance";
import Dancer from "./dance-builder";

export class TangoDirector {
  static construct(): Dance {
    return new Dancer().setSteps(25).setMusicStyle("Spanish").getResult();
  }
}
