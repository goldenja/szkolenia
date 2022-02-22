import React, { useState, useEffect } from 'react';

// Pobieranie danych, tworzenie subskrypcji 
// czy ręczna ingerencja w drzewo DOM z wewnątrz komponentów 
// - to wszystko przykłady efektów ubocznych. 
// Niezależnie od tego, czy znasz je pod nazwą „efekty uboczne” (lub po prostu „efekty”), 
// najprawdopodobniej masz je zaszyte gdzieś w swoim kodzie.

function UseEffect() {
  const [count, setCount] = useState(0);

  // Podobnie do metod componentDidMount i componentDidUpdate:
  // poprzez użycie tego hooka mówisz Reactowi, 
  // że twój komponent musi wykonać jakąś czynność po jego wyrenderowaniu.
  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    document.title = `Kliknięto ${count} razy`;
  });

  return (
    <div>
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}

  export default UseEffect;