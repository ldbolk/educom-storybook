import Input from "../Input/Input";

export default {
    title: "Atoms/Input",
    component: Input
}

const Template = args => <Input {...args}/>

export const Email = Template.bind({});
Email.args = {
    type: 'email',
    padding: 'medium',
    placeholder: 'Email',
    width: 20
};

export const Password = Template.bind({});
Password.args = {
    type: 'email',
    padding: 'large',
    placeholder: 'Password',
    width: 50
}