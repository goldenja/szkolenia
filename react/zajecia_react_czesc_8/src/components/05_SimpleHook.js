import React, { useState, useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default function SimpleHook() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Kliknięto ${count} razy`);

  return (
    <div>
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}
