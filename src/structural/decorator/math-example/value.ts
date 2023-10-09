export interface IValue {
	value: number
}

class _Value implements IValue {
	value: number

	constructor(value: number) {
		this.value = value
	}
}

// Noted that this is not completely necessary, however,
// it makes using these functions more convenient.
export default function Value(value: number): IValue {
	return new _Value(value)
}