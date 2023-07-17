import { domainModel } from './domain-model'

// An interface for the domain-service layer
interface IService {
	id: number
	businessLogic: string
	getBusinessLogic(): domainModel
}

// The base class to be used by the interface layer
export default class Service implements IService {
	id = 0
	businessLogic = ''

	getBusinessLogic(): domainModel {
		return {
			id: this.id,
			businessLogic: this.businessLogic,
		}
	}
}
