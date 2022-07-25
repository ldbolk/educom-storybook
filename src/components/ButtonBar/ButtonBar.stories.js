import ButtonBar from '../ButtonBar/ButtonBar'

export default {
    title: "Molecules/ButtonBar",
    component: ButtonBar
}

const Template = args => <ButtonBar {...args} />

const buttonLeft = {
    label: "Forgot Password",
    size: "medium",
    color: "#000",
    backgroundColor: "#CCC"
}

const buttonRight = {
    label: "Login",
    size: "medium",
    color: '#000',
    backgroundColor: "#CDF"
}

export const Left = Template.bind({})
Left.args = {
    position: "left",
    buttonLeft: buttonLeft,
    buttonRight: buttonRight
}

export const Center = Template.bind({})
Center.args = {
    position: "center",
    buttonLeft: buttonLeft,
    buttonRight: buttonRight
}

export const Right = Template.bind({})
Right.args = {
    position: "right",
    buttonLeft: buttonLeft,
    buttonRight: buttonRight
}