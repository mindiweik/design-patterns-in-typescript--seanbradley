//“Two roads diverged in a wood, and I – I took the road less traveled by”
// Robert Frost

import IPoem from './ipoem'
import IPoemImplementer from './ipoem-implementer'

export default class RobertFrost implements IPoem {
	#implementer: IPoemImplementer

	constructor(implementer: IPoemImplementer) {
		this.#implementer = implementer
	}

	prose(): void {
		this.#implementer.proseImplementation()
	}
}