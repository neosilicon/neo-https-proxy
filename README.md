# neo-https-proxy
Interacting with NEO HTTP seeds over HTTPS. Webtask backend and a client helper script to interact with the RPC.

## Webtask Usage
### Public Webtask
Right now there's a Webtask available to handle HTTPS proxying over at `https://wt-eb8e8a5788a32c0054649520e12aca04-0.sandbox.auth0-extend.com/neo-proxy-public`.

### Host your own Webtask
Sign up at [webtask.io](https://webtask.io) and [check your Webtask is running Node 8](https://tomasz.janczuk.org/2017/09/auth0-webtasks-and-node-8.html).
Use the code at `src/proxy/neo-https-proxy.js` and make sure to add Express and Axios as dependencies!

## Client Usage
Use it as a dependency: `npm install @be-neo/neo-https-proxy`

There are both ES5 and ES6 versions of the code. Using this package as a dependency will use the ES5 version.
Call `queryHttpsProxy` the same way you would use `Neon.default.rpc.queryRPC`. A third argument can be provided to use your own Webtask.
If you only provide two arguments, the Webtask mentioned above will be used.

Source (ES6): `src/client/queryHttpsProxy.js`
Transpiled (ES5): `client/queryHttpsProxy.js`

### Building changes
If you provided any changes to the client's source, transpile it by using `npm run client:build`
