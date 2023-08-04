import Dance from "./dance"
import Dancer from "./dance-builder"

export class SwingDirector {
	static construct(): Dance {
		return new Dancer().setSteps(15).setMusicStyle('smooth').getResult()
	}
}
