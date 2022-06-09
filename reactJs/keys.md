2022-6-8

## How to transform lists in JavaScript

-> map()

## the same in react transform arrays into lists of elements

-> map()

### Basic list component

```jsx
function NumberList (props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <li key={number.toString()}>{numner}</li>);
    return (
        <ul>{listItems}</ul>
    )
}

const numbers = [1,2,3,4,5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />)
```

### using an index as a key

a key is the only thing React uses to identify DOM elements.

if push an item to the list or remove something in the middle, If the key is same as before React assume that the DOM element represents the same component as before. But that is no longer true.

### using a global index

### more robust using nanoid

### which cases may safely use the index as a key

- the list and items are static-they are not computed and do not change
- the items in the list has no ids
- the list is never recordered or filtered



