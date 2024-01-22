//“Two roads diverged in a wood, and I – I took the road less traveled by”
// Robert Frost


import IPoemImplementer from './ipoem-implementer'

export default class RobertFrostImplementer implements IPoemImplementer {
	proseImplementation(): void {
		console.log('Two roads diverged in a wood, and I – I took the road less traveled by')
		console.log('~ Robert Frost')
	}
}