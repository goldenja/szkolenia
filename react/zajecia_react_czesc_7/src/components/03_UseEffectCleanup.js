import React, { useState, useEffect } from 'react';

// Pobieranie danych, tworzenie subskrypcji 
// czy ręczna ingerencja w drzewo DOM z wewnątrz komponentów 
// - to wszystko przykłady efektów ubocznych. 
// Niezależnie od tego, czy znasz je pod nazwą „efekty uboczne” (lub po prostu „efekty”), 
// najprawdopodobniej masz je zaszyte gdzieś w swoim kodzie.

function UseEffectCleanup() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());


    useEffect(() => {
      
      const interval = setInterval(
        () => { setTime(new Date().toLocaleTimeString() );},
        1000,
      );

      // Określ sposób sprzątania po tym efekcie:
      return () => clearInterval(interval);
    });


    return <div className="Clock">{time}</div>;
    
  }
  

  export default UseEffectCleanup;