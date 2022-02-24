import React, { useState, useEffect } from 'react';

// Pobieranie danych, tworzenie subskrypcji 
// czy ręczna ingerencja w drzewo DOM z wewnątrz komponentów 
// - to wszystko przykłady efektów ubocznych. 
// Niezależnie od tego, czy znasz je pod nazwą „efekty uboczne” (lub po prostu „efekty”), 
// najprawdopodobniej masz je zaszyte gdzieś w swoim kodzie.

function UseEffectMultiple() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    document.title = `Kliknięto ${count} razy`;
  });

  useEffect(() => {

    const interval = setInterval(
      () => { setTime(new Date().toLocaleTimeString()); },
      1000,
    );

    // Określ sposób sprzątania po tym efekcie:
    return () => clearInterval(interval);
  });


  return <div><div className="Clock">{time}</div>
    <div>
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  </div>;

}


export default UseEffectMultiple;