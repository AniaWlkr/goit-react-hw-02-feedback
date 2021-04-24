import styles from './Button.module.css';

const Button = ({ name, onButtonClick }) => {
  return (
    <button
      type="button"
      name={name}
      className={styles.button}
      onClick={() => onButtonClick(name)}
    >
      {name}
    </button>
  );
};

export default Button;
