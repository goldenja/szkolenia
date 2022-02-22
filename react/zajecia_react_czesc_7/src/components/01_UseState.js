import React , { useState } from 'react';


// Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. 
// Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. 
// W kolejnych rozdziałach poznamy inne hooki.

class UseState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Kliknięto {this.state.count} razy</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Kliknij mnie
        </button>
      </div>
    );
  }
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