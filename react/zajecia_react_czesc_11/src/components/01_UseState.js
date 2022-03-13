import React , { useState , useEffect , useRef} from 'react';


// Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. 
// Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. 
// W kolejnych rozdziałach poznamy inne hooki.


function UseState() {
  let a = 3;
  let b = useRef(3);

  const [count, setCount] = useState(0);

  const startHandler = () => {

    console.log("A " + a);
    console.log("B " + b.current);

    
    setCount(count+1);
  };

  const stopHandler = () => {
    a = 5;
    b.current = 5;

    setCount(count+2);
  };

  return (
    <div>
      <div>Timer: {count} A: {a} B: {b.current}</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}





// function UseState() {
//   // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Kliknięto {count} razy</p>
//       <button onClick={() => setCount(count + 1)}>
//         Kliknij mnie
//       </button>
//     </div>
//   );
// }

  export default UseState;