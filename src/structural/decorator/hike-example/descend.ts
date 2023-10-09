import { IElevation } from './elevation'

class _Descend implements IElevation {
	elevation: number

	constructor(elev1: IElevation | number, elev2: IElevation | number) {
		const begin = Object.prototype.hasOwnProperty.call(elev1, 'elevation')
			? (elev1 as IElevation).elevation
			: (elev1 as number)
		const progress = Object.prototype.hasOwnProperty.call(elev2, 'elevation')
			? (elev2 as IElevation).elevation
			: (elev2 as number)
		
		this.elevation = begin - progress
	}
}

export default function Descend(
	elev1: IElevation | number,
	elev2: IElevation | number
): IElevation {
	return new _Descend(elev1, elev2)
}