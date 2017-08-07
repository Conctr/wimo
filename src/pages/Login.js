import React, { Component } from 'react'
import bg from '../wimo-bg.png'
import logo from '../wimo-logo.svg'
import TextField from '../components/atoms/TextField'
import Checkbox from '../components/atoms/Checkbox'
import RaisedButton from '../components/atoms/RaisedButton'
import LoginModal from '../components/molecules/LoginModal'
import GoogleLoginButton from '../components/molecules/GoogleLoginButton'


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createAccount: false,
      email: '',
      password: ''
    }
  }

 submitToAuth = (callback) => {
  // Get values from the field
  const email = this.state.email
  const password = this.state.password
  // Call the callback function with our values

  callback({ email, password })
}
  onEmailChange = (e,newValue) => {
    console.log(newValue)
    this.setState({
      email: newValue
    })
  }
 
  onPasswordChange = (e,newValue) => {
    console.log(newValue)
    this.setState({
      password: newValue
    })
  } 

  handleAccountChange = () => this.setState({
    createAccount: !this.state.createAccount
  })

  render() {
    return (
      <div className='welcome-container'>
        <img src={ bg } className='home-bg' />
        <div className='welcome-dialogue'>
          <img src={ logo } className='hero-logo' />
          <div>
            <RaisedButton
              className ="login-page-button"
              label="Register"
              fullWidth={ true } />
            <LoginModal className="login-modal" />
            <GoogleLoginButton />
          </div>
          <RaisedButton onTouchTap={this.handleAccountChange }
            label={ this.state.createAccount ? ('Create Account') : ('Sign In') } />
          { this.state.createAccount ? (
            <div>
              <TextField
                onChange={ this.onEmailChange }
                value={ this.state.email }
                text='Email' />
              <TextField
                onChange={ this.onPasswordChange }
                value={ this.state.password }
                text='Password'
                type='password' />
              <button>Create Account</button>
            </div>
          ) : (
            <div>
              <TextField
                onChange={ this.onEmailChange }
                value={ this.state.email }
                text='Email' />
              <TextField
                onChange={ this.onPasswordChange }
                value={ this.state.password }
                text='Password'
                type='password' />
              <Checkbox label="remember me" labelPosition='left' />
              <RaisedButton onTouchTap={() => this.submitToAuth(this.props.onSignIn)}>Sign In</RaisedButton>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default LoginPage


//           <label>
//             <span>Email </span>
//             <input name='email' />
//           </label>
//           <label>
//             <span>Password </span>
//             <input type='password' name='password' />
//           </label>
