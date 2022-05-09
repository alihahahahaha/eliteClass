## Synchronous vs Asynchronous JavaScript-Call Stack, Promises

call stack

task queue / callback queue

Browser APIs / Web APIs

Promise

job queue

### Classify most asynchronous javascript operations with two primary triggers

- **Browser API / Web API** events or functions. These include method like setTimeout, or event handlers like click, mouse over, scroll, and many more
- **Promises**

### promise

Every time a promise occurs in the code, the excutor function ges into the **job queue**

The event loop look into the queue **gives the priority to the job queue items over the callback queue items** when the stack is free

the item in the callback queue is called a **macro task**, whereas the item in the job queue is called **micro task**

- for each loop of the event loop, one task is completed out of the callback queue
- Once that task is complete, the event loop visits the job queue. It completes all the micro tasks in the job queue before it looks into the next thing
- If both the queues got entries at the same point in the time, the job queue ges preference over the callback queue


### Promise

https://blog.greenroots.info/javascript-promises-explain-like-i-am-five

a promise is a javascript **object** that allows you to make **asynchronous(aka async) calls**

it produces a **value** when async operation completes successfully or produces an **error** if it doesn't complete

```javascript
let promise = new Promise(function(resolve, reject) {
    // do something and either resolve or reject
})
```

we need to pass **a funciton** to the **Promise Constructor**, that function is called the **executor function** the executor function take two arguments, **resolve** and **reject**, These two are callback functions for the executor to announce an outcome.

the resolve method indicates **successful completion** of the task, and the reject method indicates an **error**  you need to call them from the executor function

### the promise object and states

internal properties
- state
  - pending
  - fulfilled
  - rejected
- result
  - undefined
  - value
  - error

tree handler methods
- .then()
- .catch()
- .finally()

The consumer of a promise can use the .then(), .catch(), and .finally() methods to handle promises.

### .then() promise handler

the sole purpose of this method is to let consumer know about the outcome of a promise. it accepts two functions as arguments, **result** and **error**

```javascript
promise.then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
)

promise.then(
  (result) => { 
      console.log(result);
  }
)

promise.then(
  null,
  (error) => { 
      console.log(error)
  }
);
```

you can do three very exceptional things inside the .then() method
- return another **promise** from it
- return a value including **undefined**
- throw an **error**

### .catch() promise handler

use this handler method to handle errors from promises, it is a much better syntax to handle the error situation than handling it using the .then() method

### .finally() promise handler

```javascript
let loading = true;
loading && console.log('loading...');

// Getting the promise
promise = getPromise();

promise.finally(() => {
    loading = false;
    console.log(`Promise is settled and loading is ${loading}`);
}).then((result) => {
    console.log(result);
})
```

the .finally() method passes through the result or error to the next handler, which can call a .then() or .catch() again.

## Promise Chain

