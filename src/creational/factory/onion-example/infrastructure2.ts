import Service from "./domain-service"

// The infrastructure layer uses the domain-service layer
export default class Infrastructure2 extends Service {
	constructor() {
		super()
		this.id = 2
		this.businessLogic = 'Infrastructure2'
	}
}
