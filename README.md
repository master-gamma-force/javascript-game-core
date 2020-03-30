# Run Tests Engine

The main goal of this project is to return If a test failed or passes to be used in a frontend application.

It will use jest as testing language.

The engine will take as parameters the `codeToTest` and `test` to test and return If failed or success.

## How to use It

### `yarn install`

Install dependencies.

### `yarn start`

It returns the quantity of errors in the code.

## Functions

### utils/runTests

The `runTest(path)` function returns a Promise of quantity of errors in a specific test.

It get from parameters the path of source.

