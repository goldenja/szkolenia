import React from 'react'; 

const Button = ({onSubmit, name, type, onClick}) => <button className="btn" onClick={onClick} type={type} onSubmit={onSubmit}>{name}</button>;

export default Button;