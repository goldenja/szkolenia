
import React from 'react';


export default function UseCallback() {

  const [count, setCount] = React.useState(0);

  const getValue = (value) => console.log(value);

  return (
    <div>
      <h1>{count}</h1>
      
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase count
      </button>

      <ChildComponent onItemClick={getValue} />

    </div>
  );
}

const ChildComponent = React.memo(({ onItemClick }) => {

  const array = new Array(1000).fill(1);

  const renderItem = (item) => <div onClick={onItemClick}>{item}</div>;

  React.useEffect(() => {
    console.log('child render again');
  });

  return (
    <div>
      {array.map((elem) => renderItem(elem))}
    </div>
  );
});


//const getValue = useCallback((value) => console.log(value), []);