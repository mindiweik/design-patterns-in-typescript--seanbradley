//“There is no greater agony than bearing an untold story inside you.”
// ~Maya Angelou

import IPoem from './ipoem'
import IPoemImplementer from './ipoem-implementer'

export default class MayaAngelou implements IPoem {
	#implementer: IPoemImplementer

	constructor(implementer: IPoemImplementer) {
		this.#implementer = implementer
	}

	prose(): void {
		this.#implementer.proseImplementation()
	}
}