import Label from './Label';

export default {
    title: "Atoms/Label",
    component: Label
}

const Template = args => <Label {...args} />;

export const Muted = Template.bind({})
Muted.args = {
    color: "muted",
    label: "Email"
}

export const Black = Template.bind({})
Black.args = {
    color: "Black",
    label: "Email"
}

export const MutedPassword = Template.bind({})
MutedPassword.args = {
    color: "muted",
    label: "Password"
}

export const BlackPassword = Template.bind({})
BlackPassword.args = {
    color: "Black",
    label: "Password"
}