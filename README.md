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

Examples:

- The `cooking-example` folder showcases this pattern in the context of a client ordering some food from a restaurant.
- The `onion-example` folder showcases this pattern more in the context of "onion architecture" which is a way of organizing code into layers of abstraction. I've been working to learn this recently as well so I wanted to give it a shot!

2. ABSTRACT FACTORY - An additional layer of abstraction which can be added on top of other creational pattern implementations. It's essentially a factory for building out other "factories" or object creators. It's great for when you need to create a family of objects that are related to each other, and have similar but different implementations behind the scenes.

Terms:

- **Client:** This calls the Abstract Factory to create the objects, similar to the Concrete Creator.
- **Abstract Factory:** A common interface over all of the sub factories.
- **Concrete Factory:** There can be more than one in this type of pattern! This is a sub factory from the Abstract Factory. It will contain details (method(s), field(s), etc.) to create a Concrete Product.
- **Abstract Product:** The interface and/or abstraction for the product the sub factory will create.
- **Concrete Product:** The object that is finally returned.

Examples:

- The `plants-example`showcases an abstract factory (using the factory method) to create a set of plant options. The client can request a type of flower or tree and the abstract factory will return the object type requested.

3. BUILDER - A pattern allowing for the creation of complex objects separate from their representation. The same construction process can be used to create different representations of a simplified-as-possible complex object.

Terms:

- **Product:** The final object that is created by the Builder.
- **Builder Interface:** The interface describing the attributes and methods the Concrete Builder class requires to create the final object (Product).
- **Builder:** The Concrete Builder class itself. This declares the method (Builder Interface) to return the final object (Product).
- **Director:** The class that will call the Builder to create the final object (Product) using a `construct()` method along with any other Builder-speficic methods.

Examples:

- The `dance-example` showcases a builder pattern to create a set of dances using the Builder pattern.

4. PROTOTYPE - A pattern used especially when resources and memory are limited. A clone method is defined and will be used to create either a shallow or deep copy of the original object.

Terms:

- **Prototype Interface:** This is the interface for the clone method.
- **Prototype:** The object or product which implements the prototype interface/clone method.
- **Client:** The client uses and creates the Prototype.

Examples:

- The `goat-example` showcases a prototype pattern to make clones of goats with different names and colors which can be altered by the client using a shallow copy.

5. SINGLETON - Use this pattern when you only require one object instance. This is not just a static class, but an instance of a class.

Examples:

- The `pets-example` showcases a singleton pattern to hold an instance of the pets in my household at the time of this example.

#### Structural

Focuses more on how classes and objects are composed using the different structural techniques, and to form structures with more or altered flexibility.

#### Behavioral

Are concerned with the inner algorithms, process flow, the assignment of responsibilities and the intercommunication between objects.

## References:

- [Sean Bradley's website](https://sbcode.net/typescript/) provides the initial examples provided along with UML diagrams and explanations for the different patterns.
- A great additional resource I used to solidify my knowledge of design patterns is [Refactoring Guru](https://refactoring.guru/design-patterns/catalog).
