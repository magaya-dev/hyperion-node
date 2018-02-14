# Hyperion-Node - Gateway to Hyperion in Node

## Get Started with Hyperion in Node
Project hosting hyperion which can be included in other node projects.

```js
const hyperion = require('hyperion-node')('appName', argv);

// hyperion.algorithm   - access to algorithms
// hyperion.connection  - access to raw hyperion connection
// hyperion.dbx         - access to hyperion database namespaces
hyperion.algorithm.findFirst(hyperion.dbx.using(hyperion.dbx.Warehousing.PickupOrder.ListByNumber))
    .then(pickup => console.log(pickup));
```

## Startup
To get started provide the module with an *application name* and the list of *application parameters*.

## Components
- algorithm
- connection
- dbx

---

### Descriptions coming soon...
