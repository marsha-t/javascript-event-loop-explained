# JavaScript Event Loop Explained Series

A deep dive into how JavaScript actually runs — built from experiments, not diagrams.

## What this is about

JavaScript has many “asynchronous” mechanisms (`await`, `setTimeout`, `Promise`, `requestAnimationFrame`) that look similar but behave very differently.

This series builds a precise mental model of:

* why nothing interrupts JavaScript execution 
* why Promises run before timers 
* why rendering doesn’t happen when you expect 
* and how all of this affects real UI code 

Understanding this makes async behaviour more predictable, especially when debugging timing issues, UI glitches, or unexpected ordering. 

The core idea is simple:
> JavaScript runs to completion inside a task, and nothing interrupts it. 

From there, we layer in:

* **macrotasks** (what a task actually is),
* **microtasks** (why Promises run first), 
* **`async`/`await`** (pausing a function without pausing JavaScript), 
* **rendering** (why the screen doesn’t update mid-turn), 
* **`requestAnimationFrame`** (the missing pre-render scheduling layer), and finally, 
* what this means for **real UI code**. 

### Quick question

What does this log?

```js
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("sync");
```

If you're not 100% sure what happens and why, this series is for you. 

## How to run the experiments

This series is built around small, runnable experiments. You are welcome to run these code snippets to verify the output for yourself. 

While some snippets work in Node.js, others rely on browser APIs (like rendering or `requestAnimationFrame`), so the browser is the most reliable environment.

1. Open your browser
2. Open DevTools → Console
3. Paste the snippet
4. Observe the output

In addition, some experiments require an `index.html` file running directly in the browser. These snippets and `index.html` are included in the `/experiments` folder 

Finally, some snippets include long loops that will block your browser for a few seconds.  
Others may require refreshing or closing the tab to recover.

## How to read this series
Each article builds on the previous one. You *can* jump around, but the payoff is highest if you go in order.

* If you want the **core mental model quickly**: read Articles 1–3  
* If you care about **rendering and UI behavior**: Articles 5–7 connect the model to what you see on screen  
* If you just want answers: each article is self-contained, but the full model only emerges across the series

## The Articles

**1) Before the Event Loop: What Actually Runs JavaScript**

Why doesn’t `setTimeout` interrupt your code? This article breaks the illusion: JavaScript runs synchronously, and async APIs don’t interrupt. Instead, they schedule.

Read it [here](docs/01-mental-model.md). 

**2) Macrotasks: What a Task Actually Is**

If nothing can interrupt JavaScript, when does anything else run? This article reframes tasks as entry points into execution, not chunks of work.

_Coming soon_

**3) Microtasks: Why Promises Run First**

Why do Promises always run before `setTimeout`? This article reveals microtasks as mandatory continuations that must run before JavaScript moves on.

_Coming soon_

**4) `async` / `await`: Pausing Functions Without Pausing the World**

Does `await` pause your program or just your function? This article shows how `await` actually works.

_Coming soon_

**5) Rendering Is a Browser Decision, Not a JavaScript One**

You updated the DOM. So why didn’t the screen change? This article explains why rendering is not triggered by JavaScript, but gated by it.

_Coming soon_

**6) `requestAnimationFrame`: The Missing Scheduling Layer**

If rendering only happens at certain moments, how do you run code at the right time? This article introduces `requestAnimationFrame` as the missing scheduling layer.

_Coming soon_

**7) What the Event Loop Means for Real UI Code**

Why do UIs freeze, skip updates, or feel laggy? This article connects the event loop to real-world UI behavior and shows how to work with the browser, not against it.

_Coming soon_

## The mental model

This is the model everything in this series builds toward:

1. The browser (runtime) starts a macrotask  
2. JavaScript runs synchronously until the call stack is empty  
3. The runtime drains all microtasks  
4. The browser runs any `requestAnimationFrame` callbacks  
5. Microtasks drain again (if any were queued during `requestAnimationFrame`)  
6. Only then can rendering happen  

## Continue the Conversation

If you want to discuss edge cases, counterexamples, or how this interacts with real applications, I’m always happy to chat.

The full series is hosted on my [website](https://www.marshateo.com/writing/javascript-event-loop-landing). 
This series is also cross-posted on [Medium](https://medium.com/@marshateo/javascript-event-loop-series-building-the-event-loop-mental-model-from-experiments-fc1accf31223?postPublishedType=repub) and [Dev.to](https://dev.to/marshateo/javascript-event-loop-series-building-the-event-loop-mental-model-from-experiments-4d8i).

