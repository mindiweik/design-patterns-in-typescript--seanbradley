import MayaAngelouImplementer from './mayaAngelou-implementer'
import RobertFrostImplementer from './robertFrost-implementer'
import MayaAngelou from './mayaAngelou'
import RobertFrost from './robertFrost'

const maya = new MayaAngelou(new MayaAngelouImplementer())
const robert = new RobertFrost(new RobertFrostImplementer())

maya.prose()
robert.prose()