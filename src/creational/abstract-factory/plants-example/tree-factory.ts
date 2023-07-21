import SmallTree from './small-tree'
import MediumTree from './medium-tree'
import BigTree from './big-tree'
import { ITree } from './tree'

export default class TreeFactory {
	static getTree(tree: string): ITree {
		if (tree == 'SmallTree') {
			return new SmallTree()
		} else if (tree == 'MediumTree') {
			return new MediumTree()
		} else if (tree == 'BigTree') {
			return new BigTree()
		} else {
			throw new Error('No Tree Found')
		}
	}
}