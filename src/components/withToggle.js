import React from "react";
import { RegisterContainer } from "./withForm";
import User from "./User";


const withToggle = (Component) => {
    return class extends React.Component {
        state = {
            isToggled: false
        }

        handleToggled = e => 
            this.setState({isToggled: Boolean(e.target.checked)})

        render() {
            return <Component {...this.state} submit={this.props.submit} handleToggled={this.handleToggled} />
        }
    }
}


export const UserWrapper = withToggle(User);
export const RegWrapper = withToggle(RegisterContainer);