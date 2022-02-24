import React  from 'react';


export default function UseMemo() {

  const [count, setCount] = React.useState(0);
  const array = new Array(100).fill(2);

  const reducedValue = array.reduce((a, b) => {
    console.log('computed again')
    return a + b;
  })


  return (
    <div>
      <h1>{count}</h1>
      <p> {reducedValue} </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase count
      </button>
    </div>
  );
}

//const reducedValue = React.useMemo(() => array.reduce((a,b) =>{console.log('computed again'); return a + b;}), [])