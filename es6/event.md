## Event Flow

Event Flow describes the order in which events are received on the page, the Internet Explorer and Netscape development teams came up with an almost exactly opposite concept of event flow. Internet Explorer would support an event bubbling flow, whereas Netscape Communicator would support an event capturing flow.

## Event Bubbling

The Internet Explorer event flow is called *event bubbling* because an event is said to start at the most specific element(the deepest possible point in the document tree) and then flow upward toward the least specific mode(the document)

## Event Capturing

The Netscape Communicator team came up with an alternate event flow called *event capturing* the theory of event capturing is that the least specific node should receive the event first, and the most specific node should receive the event last. Event capturing was really desiged to intercept the event before it reached the intended target. 

## DOM Event Flow

The event flow specified by DOM Level 2 Events has three phases:
- the event capturing phase
- at the target
- the event bubbling phase

Event capturing occurs frist, providing the opportunity to intercept events if necessary. the final phase is bubbling, which allows a final respose to the event.

In the DOM event flow, the actual target does not receive the event during the capturing phase. the next phase is "at target", which fires on the <div> and is considered to be part of the bubbling phase in terms of event handling 

Even though the DOM Level 2 Events specification indicates that the capturing phase doesn't hit the event target. modern broswers all fire an event during the capturing phase on event target. 

The end result is that there are two opportunities to work with the event on target

## Event Handlers

A function that is called in respose to an event is called an event handler(or a event listener)

## HTML Event Handlers


```javascript
<input type="button" value="Click Me" onclick="showMessage()"/>
```

Event handlers assigned in this way have some unique aspects. 

- a function is created that wraps the attribute value. That function has a special local variable called event, which is the event object.   The this value inside of the function is equivalent to the event's target element 

- how this dynamically created function augments the scope chain. 