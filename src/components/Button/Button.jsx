import styles from './Button.module.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

export default Button;
