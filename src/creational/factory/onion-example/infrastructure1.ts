import Service from "./domain-service"

// The infrastructure layer uses the domain-service layer
export default class Infrastructure1 extends Service {
	constructor() {
		super()
		this.id = 1
		this.businessLogic = 'Infrastructure1'
	}
}
