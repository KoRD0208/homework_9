import React from 'react'
import {LoginContainer} from './withForm'
import { RegWrapper } from './withToggle'

class  User extends React.Component {
    
  submit = value => {
    console.log(value)
  }

    render(){
      const {isToggled: isRegister, handleToggled} = this.props
      return (
        <div className="pt-3">
            <div className="form-check">
              <input checked={isRegister} onChange={handleToggled} 
                type="checkbox"  name="isRegister" id="isRegister"  className="form-check-input" 
              />
              <label className="form-check-label" htmlFor="isRegister">Switch to {isRegister ? 'Login': 'Register'}</label>
            </div>
            <hr />

            <h2>{isRegister ? 'Register': 'Login'}</h2>
          
            {isRegister ? <RegWrapper submit={this.submit}/>
            : <LoginContainer submit={this.submit}/>}
        </div>
    )
    }
}
export default User; 