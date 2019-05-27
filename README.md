# Hyperion-Node - Gateway to Hyperion in Node

## Get Started with Hyperion in Node
Project hosting hyperion which can be included in other node projects.

```js
// process.argv needs to include an entry '--connection-string'
// the second parameter is the unique identifier of the application connecting to the database
const hyperion = require('@magaya/hyperion-node')(process.argv, 'extension-example');

// hyperion.algorithm   - access to algorithms
// hyperion.connection  - access to raw hyperion connection
// hyperion.dbx         - access to hyperion database namespaces
// hyperion.dbw         - access to hyperion write access functionality
hyperion.algorithm.findFirst(hyperion.dbx.using(hyperion.dbx.Warehousing.PickupOrder.ListByNumber))
    .then(pickup => console.log(pickup.Number));
```

## Compatibility

In production, Magaya will handle all the dependencies to ensure the extensions (NodeJS apps) run accordingly, matching compatible versions of the Magaya Explorer, NodeJS, npm and the related Hyperion packages.

In development, you'll need to install the tools that are compatible with the version of Magaya you're using, check the table below:

| Magaya        | NodeJS        |
| ------------- | ------------- |
| v11.2.x       | 8.11.1 [32 bits](https://nodejs.org/dist/v8.11.1/node-v8.11.1-x86.msi) [64 bits](https://nodejs.org/dist/v8.11.1/node-v8.11.1-x64.msi)  |
| v11.1.x       | 8.11.1 [32 bits](https://nodejs.org/dist/v8.11.1/node-v8.11.1-x86.msi) [64 bits](https://nodejs.org/dist/v8.11.1/node-v8.11.1-x64.msi)  |
| v11.0.3       | 8.11.1 [32 bits](https://nodejs.org/dist/v8.11.1/node-v8.11.1-x86.msi) [64 bits](https://nodejs.org/dist/v8.11.1/node-v8.11.1-x64.msi)  |

## Startup
To get started provide the module with an *application name* and the list of *application parameters*.

## Components
- algorithm
- connection
- dbx
- dbw

---

### Descriptions coming soon...
