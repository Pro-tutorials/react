import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ text, style, clickHandler }) => {
    return (
        <button className={style} onClick={clickHandler}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
};

export default Button;
