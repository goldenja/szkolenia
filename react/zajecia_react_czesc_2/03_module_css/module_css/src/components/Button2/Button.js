import styles from './Button.module.css'

const Button = ({ type = "button", label, disabled }) => {
  const btnClass = disabled ? styles.disabled : styles.active;

  return (
    <button className={btnClass} type={type} disabled={disabled}>
      <span className="text_global">  {label} </span>
    </button>
  );
};

export default Button;
