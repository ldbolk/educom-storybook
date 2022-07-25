import PropTypes from 'prop-types';

import ButtonBar from "../ButtonBar/ButtonBar";
import FormGroup from "../FormGroup/FormGroup";

import './LoginForm.css';

const LoginForm = ({ label, type, padding, color, width }) => {
    const changeHandler = (e) => {
        alert(e.target.value);
    }

    return (
        <div className="login-form">
            <Label label = { label } color={color}/>

            <Input 
                type = {type}
                placeholder = {label}
                padding = {padding}
                width = {width}
                onChange = {changeHandler}/>
        </div>
    )
}

export default LoginForm;