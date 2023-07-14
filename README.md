## Personal Examples of Design Patterns in TypeScript

This is my personal set of notes and examples created during the course [Design Patterns in TypeScript](https://www.udemy.com/course/design-patterns-typescript/) by Sean Bradley so that I may gain a better understanding of the concepts presented.

### Design Patterns Overview

#### Creational
Abstracts the instantiation process so that there is a logical separation between how objects are composed and finally represented.

1. FACTORY - Adds an abstraction layer between the creation and instantiation of an object and allows the developer to dynamically choose classes to instantiate based on some logic. This increases the flexibility of the code for future use.

Terms:
- **Concrete Creator:** The caller of the factory method (Creator). This can be a client application, class, or method.
- **Product Interface:** The interface describing the attributes and methods the Factory class requires to create the final object (Concrete Product).
- **Creator:** The Factory class itself which declares the method (Product Interface) to return the final object (Concrete Product).
- **Concrete Product:** The final object that is created by the Factory (Creator -- using the Product Interface).

2. 

#### Structural
Focuses more on how classes and objects are composed using the different structural techniques, and to form structures with more or altered flexibility.

#### Behavioral
Are concerned with the inner algorithms, process flow, the assignment of responsibilities and the intercommunication between objects.