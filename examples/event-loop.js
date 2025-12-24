/**

* Demonstrates the Event Loop priority:

* Call Stack → Microtask Queue → Task Queue

*/

// Synchronous execution — enters the Call Stack directly
console.log('start');

// Asynchronous operation — delegated to the runtime (Timer API)
// Callback will be queued in the Task Queue (macrotask)
setTimeout(() => console.log('timeout'), 0);

// Asynchronous operation — Promise resolved by the engine
// Callback will be queued in the Microtask Queue
Promise.resolve().then(() => console.log('promise'));

//Synchronous execution — enters the Call Stack directly.
console.log('end');
