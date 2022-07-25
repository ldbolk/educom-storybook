import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type, placeholder, padding, width, onChange }) => {

    let p = 5;
    if (padding === "small") {
        p = 2;
    };
    if (padding === "large") {
        p = 10;
    };

    const style = {
        padding: p,
        width: `${width}%`
    }

    return(
        <div>
            <input className="input"
            style={style}
            type={type}
            onChange={onChange}
            placeholder={placeholder}/>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(["text", "number", "email", "url", "password"]),
    placeholder: PropTypes.string,
    padding: PropTypes.oneOf(["small", "medium", "large"]),
    width: PropTypes.number,
    onChange: PropTypes.func
}

export default Input;