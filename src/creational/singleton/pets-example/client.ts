import { Pet1 } from './pet1'
import { Pet2 } from './pet2'
import { Pet3 } from './pet3'

const Rosie = new Pet1()
Rosie.addPet('Rosie', 11)

const Rigby = new Pet2()
Rigby.addPet('Rigby', 5)

const Buzz = new Pet3()
Buzz.addPet('Buzz', 2)

Rosie.petTracker.print()
Rigby.petTracker.print()
Buzz.petTracker.print()