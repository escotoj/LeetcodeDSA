// Study

// Mapping through a list in React is a common pattern for rendering a list of components based on data from an array. You can use the JavaScript map() function to iterate over each item in your list and return a React element for each one. Here is a basic example of how you can do this:

// Basic Example
// Let's say you have a simple list of items:


const items = ['Item 1', 'Item 2', 'Item 3'];
// You can render a list of <li> elements for each item in your array like this:


function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
// Using Component Props
// If you want to render a more complex component for each item, you can pass data to that component using props. Here's an example where we have a TodoItem component:


const todos = [
  { id: 1, text: 'Do homework' },
  { id: 2, text: 'Read a book' },
  { id: 3, text: 'Write code' },
];

function TodoItem({ todo }) {
  return <div>{todo.text}</div>;
}

function TodoList() {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
// key Prop: Notice the use of the key prop in these examples. The key prop is a unique identifier that helps React keep track of which items have changed, been added, or been removed. This is important for performance and avoiding potential issues with item state in dynamic lists.

// Map Function: The map() function is a standard JavaScript function available on arrays. It takes a function as an argument. This function is called for every element in the array, receiving the current element (and its index, if needed) as arguments. The map() function then returns a new array containing the results of calling the provided function on every element in the original array.