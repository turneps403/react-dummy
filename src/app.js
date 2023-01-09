import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </>
//   );
// }

// const App = () => <><Counter/></>;
const App = () => <></>;

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("Foo Baz")
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);