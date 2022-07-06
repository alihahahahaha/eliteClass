2022-06-30T20:16:04

## elements

> const element = <h1>Hello World</h1>

## React DOM

## Rendering an Element into the DOM

in HTML page there is a div

> <div id="root"></div>

why call this a "root" DOM node because everything inside it will be managed by React DOM

applications build with just React usually have a single root DOM node

if you are integrating React into an existing app, you may have as many isolated root DOM as you like

to rander a react element, first pass the DOM element to ReactDOM.createRoot() then pass the react element to root.render()

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello World!</h1>;
root.render(element);
```

## Updating the Rendered Element

React elements are immutable. once you create an element, you can't change its children or attributes

an element is like a single frame in a movie; it represents the UI at a certain point in time

```javascript
const root = React.creteRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello World!</h1>
      <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

in practice, most React apps only call root.render() once

## React only update what's necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state

## components and props

conceptually, components are like JavaScript functions, they accept arbitrary inputs(called "props") and return React elements describing what should appear on the screen

## Function and Class Components

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

also can use ES6 class to define a component

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Rendering a Component

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="alihaha" />;
root.render(element);
```

when React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object, we call this object "props"

## always start component names with a capital letter

## Props are read only

all react components must act like pure functions with respect to their props

# state and lifecycle

use state to uodate previous ticking clock

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

function Clock(props) {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
```

ideally we want to write this once and have the Clock update itself

> root.render(<Clock />)

to implement this, we need to add "state" to the Clock component

State is similar to props, but it is private and fully controlled by the component

converting a Function to a Class

```javascript
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
```

the render method will be called each time an update happens

as long as we render <Clock /> into the same DOM node, only a single instance of the Clock class will be used, This lets us use additional features such as local state and lifecycle methods

### adding Local State to a Class

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

root.render(<Clock />);
```

### adding lifecycle methods to a class

when components are destroyed it's very important to free up resources taken by them.

mounting —— when the Clock is rendered to the DOM for the first time

unmounting —— when the DOM produced by the Clock is removed

the componentDidMount() method runs after the component output has been rendered to the DOM

```javascript
componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}
```

while this.props is set up by React itself and this.state has a special meaning, it's free to add additional fields to the class manually if one need to store something that doesn't participate in the data flow(like a timer ID)

```javascript
componentWillUnMount(){
    clearInterval(this.timerID);
}
```

it will use this.setState() to schedule updates to the component local state

```javascript
tick(){
    this.setState({
        date: new Date()
    })
}
```

whole example

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

const root = document.getElementById("root");
root.render(<Clock />);
```

recap what's going on and the order in which the methods are called

- when <Clock /> is passed to root.render(), React calls the constructor of the Clock component, since Clock needs to display the current time, it initializes this.state with an object including the current time.

- React then calls the Clock component's render() method this is How React learns what should be displayed on the screen React then updates the DOM to match the Clock's render output

- when the Clock output is inserted in the DOM, React calles the componentDidMount() lifecycle method inside it the Clock component asks the broswer to set up a timer to call the component's tick() method once a second

- Every second the browser calls the tick() method, inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. then React knows the state has changed, and calls the render() method again to learn what should be on the screen. this time this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly

- if the Clock component is ever removed from the DOM, React calls the componentWillUnmount() liftcycle method so the timer is stopped

_Do not modify State directly instead, use setState()_

### state updates may be asynchronous

React may batch multiple setState() calls into a single update for performance

second form of setState() that accepts a function rather than an object, that function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

```javascript
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));

this.setState(function (state, props) {
  return {
    counter: state.counter + props.increment,
  };
});
```

### the data flows down

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class

This is why state often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it

```javascript
<FormattedDate date={this.state.date} />;

function FormattedDate(props) {
  return <h2>It is {props.date.toLocalTimeString()}</h2>;
}
```

This is commonly called a "top-down" or "undirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "blow" them in the tree

2022-07-03T13:33:14

## Handling Events

- React Events are named using camelCase, rather than lowercase

- with JSX you pass a function as the event handler, ranther than a string

```javascript
<button onclick="activateLasers()">Activate Lasers</button>
// in React
<button onClick={activateLasers}>Activate Lasers</button>
```

Another difference is that you cannot return false to prevent default behavior on React. You must call preventDefault explicitly

```javascript
<form onsubmi="console.log('You clicked submit'); return false">
  <button type="submit">Submit</button>
</form>;
// in React
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

```javascript
class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true}
    this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState => (
      isToggleOn: !prevState.isToggleOn
    ))
  }
  reder() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    )
  }
}
```

In JavaScript, class method are not bound by default. If you forget to bind this.hanldeClick and pass it to onClick, this will be undefined when the function is actually called

there are tow ways you can get around this

- public class fields syntax

```javascript
handleClick = () => {
  console.log("this is", this);
};
```

- use arrow function in the callback

```javascript
class LoggingBUtton extends React.Component {
  handleClick() {
    console.log("this is", this);
  }
  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}
```

the problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this calllback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

### Passing Arguments to event handlers

```javascript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}></button>
```

In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.

## Conditional Rendering

let variables to store elements

### inline If with logical && Operator

Note that return the falsy expression will still cause the element after && to be skipped but will return the falsy expression.

```javascript
render(){
  const count = 0;
  return (
    <div>
      {count && <h1>Message: {count}</h1>}
    </div>
  )
}

// <div>o</div>
```

### inline if-else with conditional oprator

### preventing component from rendering

returning null from a component's render dose not affect the firing of the component's lifecycle methods

## form

```javascript
<form>
  <label>
    Name: <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This form has the default HTML behavior of browsing to a new page when the user submits the form. But in most cases, it's convenient to have a javascript function that handles the submission of the form and has the access to the data that the user entered into the form

### controlled components

In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in that way is called a "controlled component"

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert("A name was submitted" + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.

With a controlled component, the input's value is always driven by the React state. you can now pass the value to other UI elements too, or reset it from other event handlers.

### Controlled Input Null Value

2022-07-05T08:13:29

Specifying the value prop on a controlled component prevent the user from changing the input unless you desire so. (set value to undefined or null accidentally)

### Alternatives to controlled component

### uncontrolled components

form data is handled by the DOM itself

use a ref to get form values from the DOM

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  handleSubmit = () => {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="summit" value="Submit" />
      </form>
    );
  }
}
```

_Formik_

2022-07-05T19:34:45

```javascript
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }
  handleCelsiusChange = (temperature) => {
    this.setState({ scale: "c", temperature });
  }
  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: "f", temperature });
  }
  render() {
    const {scale, temperature} = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheit}
        />
      </div>
    );
  }
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  }
  render(){
    const {scale, temperature} = this.props;
    return (
      <fieldSet>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldSet>
    )
  }
}
```
