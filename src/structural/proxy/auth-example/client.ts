import ProxyService from "./proxy-service";

const PROXY = new ProxyService()

PROXY.createPassword('password123')
// This will fail
PROXY.proxyRequest('password')
// This will pass
PROXY.proxyRequest('password123')

// Change the password
PROXY.createPassword('newPassword')
// This will fail
PROXY.proxyRequest('password123')
// This will pass
PROXY.proxyRequest('newPassword')