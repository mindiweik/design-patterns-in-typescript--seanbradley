import { SwingDirector } from "./swing-director"
import { TangoDirector } from "./tango-director"
import { FoxtrotDirector } from "./foxtrot-director"

const SWING = SwingDirector.construct()
const TANGO = TangoDirector.construct()
const FOXTROT = FoxtrotDirector.construct()

console.log(SWING)
console.log(TANGO)
console.log(FOXTROT)
