# localStore
localStore is a simple JavaScript localStorage manager, where you don't have to worry about types anymore.
If you wanna save an object you are now able to without any afterwards parsing.

## Getting started
```npm install --save localstore```

## Usage
```
import localStore from 'localstore';

// Set a value without stringify
localStore.set('myArray', [1,2,3,4]);

// Get a value without parse
var result = localStore.get('myArray').length;
```
