import React, { Suspense } from 'react';
import Sample from './Sample';



export default function UseMemo() {

  const [count, setCount] = React.useState(0);
  const [showComponent, setShowComponent] = React.useState(false);

  const array = new Array(100).fill(2);

  const reducedValue = React.useMemo(() => array.reduce((a, b) => { console.log('computed again'); return a + b; }), [])


  return (
    <div>
      <h1>{count}</h1>
      <p> {reducedValue} </p>
      
       {showComponent && <Sample />} 

      <button type="button" onClick={() => setCount(count + 1)}>
        Increase count
      </button>

      <button type="button" onClick={() => setShowComponent(!showComponent)}>
        Show Component
      </button>
    </div>
  );
}

//Import

//const Sample = React.lazy(() => import('./Sample'))


// Testowanie Suspense

{/* <Suspense fallback={<div>Loading</div>}>
{showComponent && <Sample />}
</Suspense> */}

// const Sample = React.lazy(() => {
//   return new Promise  (resolve => setTimeout(resolve , 5000)).then(() => import('./Sample'));
// });



//Przechwytywanie błedów

// const Sample = React.lazy(() => {
//   return new Promise  (resolve => setTimeout(resolve , 5000)).then(() => Promise.reject(new Error()));
// });

//import ErrorBoundary from './ErrorBoundry';
{/* <ErrorBoundary>
        <Suspense fallback={<div>Loading</div>}>
          {showComponent && <Sample />}
        </Suspense>
      </ErrorBoundary> */}

//Wile komponentów
// const Sample1 = React.lazy(() => import('./ManyComponents'))

// const Sample1 = React.lazy(() => import('./Sample1'))