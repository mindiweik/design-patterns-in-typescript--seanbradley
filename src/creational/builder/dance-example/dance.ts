// Product

export default class Dance {
	steps: number = 0
	musicStyle: string = ''

	construction(): string {
		return `This dance has ${this.steps} steps and is danced to ${this.musicStyle} music.`
	}
}