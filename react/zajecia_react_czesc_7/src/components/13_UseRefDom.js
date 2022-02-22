import { useRef, useEffect } from 'react';

function AccessingElement() {
  const elementRef = useRef();

   useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // logs <div>I'm an element</div>
  }, []);

  return (
    <div ref={elementRef}>
      I'm an element

     {/* <InputFocus/>  */}
    </div>


  );
}

function InputFocus() {
  const inputRef = useRef();
  useEffect(() => {
    //console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  //console.log(inputRef.current);

  return (
    <input 
      ref={inputRef} 
      type="text" 
    />
  );
}

export default AccessingElement;