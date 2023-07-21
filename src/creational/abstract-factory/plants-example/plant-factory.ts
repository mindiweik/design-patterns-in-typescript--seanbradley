import { IFlower } from './flower'
import { ITree } from './tree'
import FlowerFactory from './flower-factory'
import TreeFactory from './tree-factory'

interface IPlantFactory extends IFlower, ITree {}

export default class PlantFactory {
	static getPlant(plant: string): IPlantFactory | undefined {

		try {
			if (['SmallFlower', 'MediumFlower', 'Big Flower'].indexOf(plant) > -1) {
				return FlowerFactory.getFlower(plant)
			}
			if (['SmallTree', 'MediumTree', 'BigTree'].indexOf(plant) > -1) {
				return TreeFactory.getTree(plant)
			}

			throw new Error('No Factory Found')
		}
		catch (e) {
			console.log(e)
		}
	}
}