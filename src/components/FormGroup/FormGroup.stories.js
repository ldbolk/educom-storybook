import FormGroup from '../FormGroup/FormGroup'

export default {
    title: "Molecules/FormField",
    component: FormGroup
}

const Template = args => <FormGroup {...args} />

export const EmailInput = Template.bind({})
EmailInput.args = {
    label: "Email",
    type: "email",
    padding: "medium",
    width: 100,
    color: "black"
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
    label: "Password",
    type: "password",
    padding: "medium",
    width: 100,
    color: "black"
}