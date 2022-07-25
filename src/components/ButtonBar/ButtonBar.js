import PropTypes from 'prop-types';

import Button from "../Button/Button";
import './ButtonBar.css';

const ButtonBar = ({ position, padding, buttonLeft, buttonRight }) => {
    let flPosition = 'center';
    if(position === "left") {
        flPosition = 'flex-start';
    } else if(position === "right") {
        flPosition = 'flex-end';
    }

    const style = {
        justifyContent: flPosition,
        padding: padding
    }

    const clickHandler = () => {

    }

    return(
        <div className="button-bar" style={style}>
            <Button
                label={buttonLeft.label}
                size={buttonLeft.size}
                backgroundColor={buttonLeft.backgroundColor}
                color={buttonLeft.color}
                onClick={clickHandler}
            />

            <Button
                label={buttonRight.label}
                size={buttonRight.size}
                backgroundColor={buttonRight.backgroundColor}
                color={buttonRight.color}
                onClick={clickHandler}
            />
        </div>
    )
}

ButtonBar.propTypes = {
    position: PropTypes.oneOf(['left', 'center', 'right']),
    padding: PropTypes.number,
    buttonLeft: PropTypes.objectOf({
        label: PropTypes.string,
        size: PropTypes.oneOf(["small", "medium", "large"]),
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        onClick: PropTypes.func
    }),
    buttonRight: PropTypes.objectOf({
        label: PropTypes.string,
        size: PropTypes.oneOf(["small", "medium", "large"]),
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        onClick: PropTypes.func
    })
};

export default ButtonBar;