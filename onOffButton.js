import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// These statements import the React and useState from the 'react' library and the ReactDOM library. The useState hook is used to manage the component's state.

const Toggle = () => {
// This defines a functional component named Toggle. Functional components are a simpler way to write components in React, and they are primarily used for stateless components.

  const [on, setOn] = useState(true);
// This line uses the useState hook to initialize a state variable on with an initial value of true. The setOn function is a state updater function that allows you to update the state.

  return (
    <button onClick={() => setOn(!on)}>{ on ? 'ON' : 'OFF' }</button>
  );
//   This is the JSX (JavaScript XML) code that defines the component's UI. It returns a button element with an onClick event handler. When the button is clicked, it calls the setOn function, toggling the value of on between true and false. The text content of the button is dynamically set based on the value of on. If on is true, the button displays 'ON'; otherwise, it displays 'OFF'.

}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);