import styles from './Button.module.css'

const Button = ({ type = "button", label, disabled }) => {
    const btnClasses = [styles.button];
  
    if (disabled) {
      btnClasses.push(styles.disabled);
    }
  
    return (
      <button className={btnClasses.join(" ")} type={type} disabled={disabled}>
        {label}
      </button>
    );
  };

export default Button;
