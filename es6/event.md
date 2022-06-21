## Event Flow

Event Flow describes the order in which events are received on the page, the Internet Explorer and Netscape development teams came up with an almost exactly opposite concept of event flow. Internet Explorer would support an event bubbling flow, whereas Netscape Communicator would support an event capturing flow.

## Event Bubbling

The Internet Explorer event flow is called _event bubbling_ because an event is said to start at the most specific element(the deepest possible point in the document tree) and then flow upward toward the least specific mode(the document)

## Event Capturing

The Netscape Communicator team came up with an alternate event flow called _event capturing_ the theory of event capturing is that the least specific node should receive the event first, and the most specific node should receive the event last. Event capturing was really desiged to intercept the event before it reached the intended target.

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
<input type="button" value="Click Me" onclick="showMessage()" />
```

Event handlers assigned in this way have some unique aspects.

- a function is created that wraps the attribute value. That function has a special local variable called event, which is the event object. The this value inside of the function is equivalent to the event's target element

```javascript
<!-- outputs "click" -->
<input type="button" value="Click Me" onclick="console.log(event.type)">
<!-- outputs "Click Me" -->
<input type="button" value="Click Me" onclick="console.log(this.value)">
```

- how this dynamically created function augments the scope chain.
  With in the function, members of both document and the element itself can be accessed as if they were local variables.
  The function accomplishes this via scope chain augmentation using _with_

```javascript
function(){
    with(document){
        with(this){
            // attribute value
        }
    }
}
```

This means that an event handler can access its own properties easily

```javascript
<!-- outputs "Click Me" -->
<input type="button" value="Click Me" onclick="console.log(value)">
```

If the element is a form input element, then the scope chain also contains an entry for the parent form element, making the function the equivalent to the following:

```javascript
function() {
 with(document) {
 with(this.form) {
 with(this) {
 // attribute value
 }
 }
 }
}

<form method="post">
 <input type="text" name="username" value="">
 <input type="button" value="Echo Username"
 onclick="console.log(username.value)">
</form>
```

## DOM Level 0 Event Handlers

The tranditional way of assigning event handlers in javascript is to assign functin to an event handler property(its simplicity and cross-broswer support)

```javascript
let btn = document.getElementById("myBtn");
btn.onclick = function () {
  console.log("Clicked");
};
```

the event handler is run within the scope of the element, meaning that _this_ is equivalent to the element.

```javascript
let btn = document.getElementById("myBtn");
btn.onclick = function () {
  console.log(this.id); // "myBtn"
};
```

remove an event handler assigned via the DOM Level 0 approach by setting the value of the event handler property to null

```javascript
btn.onclick = null;
```

## DOM Level 2 Event Handlers

DOM Level 2 Events define two methods to deal with the assignment and removal of event handlers: add EventListener() and removeEventListener().

Accept three arguments:

- the event name to handle
- the event handler function
- a Boolean value indicatiing whether to call the event handler during the capture phase(true), or during the bubbling phase(false).

```javascript
let btn = document.getElementById("myBtn");
btn.addEventListener(
  "click",
  () => {
    console.log(this.id);
  },
  false
);
```

The major advantage to using the DOM Level 2 method for adding event handlers is that multipul event handlers can be added.

anonymous functions added using addEventListener() canot be removed

In most cases, event handlers are added to the bubbling phase of the event flow because this offers the boradest possible cross-browser support. Attaching an event handler in the capture phase is best done if you need to intercept events before they reach their intended target. 

## Internet Explorer Event Handlers

attachEvent()

detachEvent()

arguments:
- the event handler name
- the event handler funtion

## Cross-Browser Event Handlers
 
## The Event Object

When an event related to the DOM is fired, all the relevant informations is gathered and stored on an object called event.

This object contains basic information such as the element that cause the event, the type of event that occurred, and any other data that may be relevant to the particular event. 

## The DOM Event Object

the event object contains properties and methods related to the specific event that caused its creation.

- *bubbles*       indicates if the event bubbles
- *cancelable*        indicates if the default behavior of the event can be canceled
- *currentTarget*         the element whose event handler is currently handle the event
- *defaultPrevented*      When true, indicates that preventDefault() has been called
- *detail*        Extra information related to the event.
- *eventPhase*        The phase during which the event handler is being called: 1 for the capturing phase, 2 for at target, 3 for bubbling.
- *preventDefault()*      Cancles the default behavior for the event. If cancelable is true, this method can be used
- *stopImmediateProagation()*     Cancels any further event capturing or event bubbling and prevents any other event handlers from being called
- *stopPropagation()*     cancels any further event capturing or event bubbling. if the bubbles is true, this method can be used
- *target*        the target of the event
- *trusted*       When true, indicates if the event was generated by the browser. when false indicates the event was created using javascript by the developer
- *type*      the type of event that was fired
- View

