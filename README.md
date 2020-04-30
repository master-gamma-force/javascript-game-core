# javascript gamma Game Core

This project expose a testing interface in the frontend using workers.

is just a work in progess that will be integrated to https://github.com/master-gamma-force/javascript-game-frontend.

## How It works

The tests will be running in a workers file because We are running the eval
function, which is very unsafe for systems and the workers are completely
isolated to the systems, also We're using external libraries in the workers
file and because the isolation cannot use any import, so is required to generate
a bundle to run the workers code.


## How to run It

### `npm run build`

This script generates the bundles for the workers, should generate a new bundle
for any change in the workers.js file

### `npm run start`

It will start the project in a new server