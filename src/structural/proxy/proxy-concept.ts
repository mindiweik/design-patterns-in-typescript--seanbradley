// A Proxy Concept Example

// An interface implemented by both the Proxy and Real Subject
interface ISubject {
	// A method to implement
	request(): void
}

// The actual real object that the proxy represents
class RealSubject implements ISubject {
	enormousData: number[]
	constructor() {
		// hypothetical enormous data
		this.enormousData = [1, 2, 3]
	}

	request() {
		return this.enormousData
	}
}

class ProxySubject implements ISubject {
	// In this case the proxy will act as a cache for
	// `enormousData` and only populate the enormousData
	// when it is actually needed
	enormousData: number[]
	realSubject: RealSubject

	constructor() {
		this.enormousData = []
		this.realSubject = new RealSubject()
	}

	request() {
		// Using the proxy as a cache, and loading data into
		// it only id needed
		if (this.enormousData.length === 0) {
	    console.log("pulling data from RealSubject");
			this.enormousData = this.realSubject.request()
			return this.enormousData
		}
		console.log('pulling data from Proxy cache')
		return this.enormousData
	}
}

// The Client
const PROXY_SUBJECT = new ProxySubject()
// Use the Subject. First time it will load the enormous amounts of data
console.log(PROXY_SUBJECT.request())
// Use the Subject again, but this time it retrieves it from local cache
console.log(PROXY_SUBJECT.request())