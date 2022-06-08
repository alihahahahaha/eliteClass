2022-6-8

## How to transform lists in JavaScript

-> map()

## the same in react transform arrays into lists of elements

-> map()

### Basic list component

```jsx
function NumberList (props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <li>{numner}</li>);
    return (
        <ul>{listItems}</ul>
    )
}

const numbers = [1,2,3,4,5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />)
```