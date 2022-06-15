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

### what will happen when use the index as key

[link to question and explanation](https://stackoverflow.com/questions/42773892/wrong-components-rendered-by-preact)

how a VDOM diff works by default the key are always 0-n where n is the array length, so removing any item simply drop the last key off the list.

since the VDOM library only knows about the new structure you give it on each render(not how to change from the old structure to the new), what the keys have done is basically tell it that items 0 and 1 remained in-place-(list is three items long([0,1,2]),then removes 1) we know this is incorrect, because we wanted the item at index 1 to be removed

key takes precedence over the default child diff recordering semantics.

in this example, because key is always just the 0-based array index, the last item(key=2)just gets dropped off because it's the one missing from the subsequent render

so

never use an array index (iteration index) as key. At best it's mimicking the default behavior (top-down child recording), but more often it just pushes all diffing onto the last child

### which cases may safely use the index as a key

- the list and items are static-they are not computed and do not change
- the items in the list has no ids
- the list is never recordered or filtered

### using a global index

move the numbering one step up in the abstraction.

### more robust using nanoid

Generate a unique id for every item and use it as key when rendering the list






