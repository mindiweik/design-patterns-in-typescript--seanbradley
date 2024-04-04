import IThirdPartyService from "./interface";
import OGThirdPartyService from "./original-service";

export default class ProxyService implements IThirdPartyService {
	secretStuff: string
	originalService: IThirdPartyService

	constructor() {
		this.secretStuff = ''
		this.originalService = new OGThirdPartyService()
	}

	createPassword(newPassword: string): void {
		this.secretStuff = newPassword
		console.log('New password has been set!')
	}

	proxyRequest(password: string): void {
		if (password === this.secretStuff) {
			this.request()
		} else {
			console.log('Incorrect password!')
		}
	}

	request(): void {
		console.log('You made it this far!')
		this.originalService.request()
	}
}