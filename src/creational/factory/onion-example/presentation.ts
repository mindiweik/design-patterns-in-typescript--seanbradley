// Client interacts with the Presentation layer
import Application from "./application"

const APP = Application.getInfrastructure(2)
console.log(APP?.getBusinessLogic())
