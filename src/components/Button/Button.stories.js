import Button from '../Button/Button';

export default {
    title: "Atoms/Button",
    component: Button
}

const Template = args => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
    size: "medium",
    label: "Login",
    backgroundColor: "#F00",
    color: '#FFF'
};

export const Forgot = Template.bind({});
Forgot.args = {
    size: "medium",
    label: "Forgot Password",
    backgroundColor: '#00F',
    color: '#FFF'
}