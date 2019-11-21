import React from 'react'
import { Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
// eslint-disable-next-line no-unused-vars
import styles from './index.css'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'login'
    }
  }

  onInputChange(e) {
    const { target } = e
    const { value, name } = target
    this.setState({
      [name]: value
    })
  }

  changePage(e, page) {
    e.preventDefault()
    this.setState({ page })
  }

  onGoogleSuccess(data, isRegistration = false) {
    console.log(data)
    const { login, register } = this.props
    const { profileObj } = data
    const { email, googleId } = profileObj

    if(isRegistration) {
      return register(email, googleId, googleId)
    }

    return login(email, googleId)
  }

  render() {
    const { login, register } = this.props
    const { page, email, password, rePass } = this.state
    if(page === 'login') {
      return (
        <div className='modal-container'>
          <div className='modal-content'>
            <Redirect to='/login' />
            <span className='logo'>Eduline</span>
            <input name='email' className='login-input' placeholder='username' onChange={ (e) => { this.onInputChange(e) } } />
            <input name='password' className='login-input' type='password' placeholder='password' onChange={ (e) => { this.onInputChange(e) } } />
            <input
              className='login-button'
              type='button'
              onClick={ () => login(email, password) }
              value='Sign-in'
            />
            <GoogleLogin onSuccess={ (response)=>this.onGoogleSuccess(response, false) } clientId='318628335602-jvjc45713h8c3vmpkrdvo3dbch09m3vs.apps.googleusercontent.com' theme='dark' />
            <span className='sign-up'>
              don&apos;t have account yet?
              { ' ' }
              <a className='sign-up-link' href='/sign-up' onClick={ (e) => this.changePage(e, 'register') }>sign-up</a>
            </span>
          </div>
        </div>
      )
    }

    return (
      <div className='modal-container'>
        <form className='modal-content'>
          <Redirect to='/registration' />
          <span className='logo'>Eduline</span>
          <input name='email' className='login-input' placeholder='username' onChange={ (e) => { this.onInputChange(e) } } />
          <input name='password' className='login-input' type='password' placeholder='password' onChange={ (e) => { this.onInputChange(e) } } />
          <input name='rePass' className='login-input' type='password' placeholder='repeat password' onChange={ (e) => { this.onInputChange(e) } } />
          <input
            className='login-button'
            type='button'
            onClick={ () => register(email, password, rePass) }
            value='Sign-up'
          />
          <GoogleLogin onSuccess={ (response)=>this.onGoogleSuccess(response, true) } clientId='318628335602-jvjc45713h8c3vmpkrdvo3dbch09m3vs.apps.googleusercontent.com' buttonText='Sign up with Google' theme='dark' />
          <span className='sign-up'>
            already have an account?
            { ' ' }
            <a className='sign-up-link' href='/login' onClick={ (e) => this.changePage(e, 'login') }>sign-in</a>
          </span>
        </form>
      </div>
    )
  }
}