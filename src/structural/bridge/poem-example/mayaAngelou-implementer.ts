//“There is no greater agony than bearing an untold story inside you.”
// ~Maya Angelou

import IPoemImplementer from './ipoem-implementer'

export default class MayaAngelouImplementer implements IPoemImplementer {
	proseImplementation(): void {
		console.log('There is no greater agony than bearing an untold story inside you.');
		console.log('~ Maya Angelou')
	}
}
