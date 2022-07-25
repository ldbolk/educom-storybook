import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, size, color, backgroundColor, onClick }) => {
    let p = 10;
    if (size === "small") {
        p = 5;
    }
    if (size === "large") {
        p = 20
    }

    const style = {
        padding: p,
        backgroundColor: backgroundColor,
        color: color
    }

    return(
        <button onClick={ onClick }
                className="button"
                style={ style }>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;