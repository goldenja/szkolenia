import { useRef } from 'react';

function UseRefSimple() {

  const countRef = useRef(0);
  
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log('I rendered!');
  return <button onClick={handle}>Click me</button>;
}

// Updating a reference doesn't trigger re-rendering, 
// while updating the state makes the component re-render;
// The reference update is synchronous (the updated reference value is available right away),
// while the state update is asynchronous (the state variable is updated after re-rendering).

export default UseRefSimple;