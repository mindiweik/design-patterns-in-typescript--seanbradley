import IThirdPartyService from './interface'

export default class OGThirdPartyService implements IThirdPartyService {
	secretStuff: string

	constructor() {
		this.secretStuff = 'Secretive things!'
	}
	
	request(): void {
		console.log('Receiving from the original third-party service:', this.secretStuff)
	}
}