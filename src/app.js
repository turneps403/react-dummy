import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

function App() {
    return (
        <>
            <Counter/>
        </>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);