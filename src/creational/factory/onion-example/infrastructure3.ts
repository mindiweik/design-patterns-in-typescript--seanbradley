import Service from "./domain-service"

// The infrastructure layer uses the domain-service layer
export default class Infrastructure3 extends Service {
	constructor() {
		super()
		this.id = 3
		this.businessLogic = 'Infrastructure3'
	}
}
