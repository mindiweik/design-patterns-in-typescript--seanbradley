import Recipe from './recipe'
import Cookbook from './cookbook'

const BOOKSHELF = new Cookbook('The Book Shelf')

const REC_1 = new Recipe('Cool-Weather Chili')
const REC_2 = new Recipe('Brussels Sprouts Aplenty')
const REC_3 = new Recipe('Special Scrambled Eggs')
const REC_4 = new Recipe('Breakfast Porridge')
const REC_5 = new Recipe('White Chicken Chili')

const CB_1 = new Cookbook('Soups & Savory')
const CB_2 = new Cookbook('Breakfast')

// Attach our new cookbooks to the bookshelf!
BOOKSHELF.attach(CB_1)
BOOKSHELF.attach(CB_2)

// Let's decide where the recipes will go...

// Chili belongs with 'soup' -- sounds good!
CB_1.attach(REC_1)
CB_1.attach(REC_5)

// Eggs and Porridge can go under Breakfast -- awesome!
CB_2.attach(REC_3)
CB_2.attach(REC_4)

// What about brussels....
// Maybe we can make another section under soups & savory?
const CB_3 = new Cookbook('Sides')
CB_3.attach(REC_2)

// Don't forget to attach the sides to the soups & savory!
CB_1.attach(CB_3)

console.log()
BOOKSHELF.display('')