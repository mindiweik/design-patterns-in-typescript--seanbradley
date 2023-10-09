import { IElevation } from './elevation'

class _Climb implements IElevation {
	elevation: number

	constructor(elev1: IElevation | number, elev2: IElevation | number) {
		const begin = Object.prototype.hasOwnProperty.call(elev1, 'elevation')
			? (elev1 as IElevation).elevation
			: (elev1 as number)
		const progress = Object.prototype.hasOwnProperty.call(elev2, 'elevation')
			? (elev2 as IElevation).elevation
			: (elev2 as number)
		
		this.elevation = begin + progress
	}
}

export default function Climb(
	elev1: IElevation | number,
	elev2: IElevation | number
): IElevation {
	return new _Climb(elev1, elev2)
}