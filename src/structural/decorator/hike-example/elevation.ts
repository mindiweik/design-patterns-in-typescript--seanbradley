export interface IElevation {
	elevation: number
}

class _Elevation implements IElevation {
	elevation: number

	constructor(elevation: number) {
		this.elevation = elevation
	}
}

export default function Elevation(elevation: number): IElevation {
	return new _Elevation(elevation)
}