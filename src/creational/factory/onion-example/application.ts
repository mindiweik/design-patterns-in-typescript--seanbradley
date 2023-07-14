import Infrastructure1 from "./infrastructure1"
import Infrastructure2 from "./infrastructure2"
import Infrastructure3 from "./infrastructure3"
import Service from "./domain-service"
import { errorHandler } from "./domain-model"

// The application connects the domain-service layer to the infrastructure layer
export default class Application {
	static getInfrastructure(id: number): Service | undefined {
		try {
			if (id == 1) {
        return new Infrastructure1();
      } else if (id == 2) {
        return new Infrastructure2();
      } else if (id == 3) {
        return new Infrastructure3();
      }
		}
		catch (e) {
			errorHandler(e)
		}
	}
}