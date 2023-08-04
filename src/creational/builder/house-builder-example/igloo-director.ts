// A Director Class

import House from "./house"
import HouseBuilder from "./house-builder"

export default class IglooDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType("Igloo")
      .setWallMaterial("Ice")
			.setNumberDoors(1)
			// An igloo will not have windows
      .getResult()
  }
}
