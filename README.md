# Hyperion-Node - Gateway to Hyperion in Node

## Get Started with Hyperion in Node
Project hosting hyperion which can be included in other node projects.

```js
// process.argv needs to include an entry '--mag-config-file'
const hyperion = require('@magaya/hyperion-node')('appName', process.argv);

// hyperion.algorithm   - access to algorithms
// hyperion.connection  - access to raw hyperion connection
// hyperion.dbx         - access to hyperion database namespaces
hyperion.algorithm.findFirst(hyperion.dbx.using(hyperion.dbx.Warehousing.PickupOrder.ListByNumber))
    .then(pickup => console.log(pickup.Number));
```

## Startup
To get started provide the module with an *application name* and the list of *application parameters*.

## Components
- algorithm
- connection
- dbx

---

### Descriptions coming soon...
