import React from 'react'
import styles from './index.css'
import { Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login'

export default class Navbar extends React.Component {

    state = {
        page: 'login'
    }

    changePage (e, page) {
        e.preventDefault()
        this.setState({page})
    }
    onInputChange(e) {
        const { target } = e 
        const { value, name } = target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    render () {
      const { login } = this.props
      const  { page, email, password } = this.state
      if (page === 'login') {
        return (
          <div className='modal-container'>
            <div className='modal-content'>
            <Redirect to='/login' />
              <span className='logo'>Eduline</span>
              <input name='email' className='login-input' placeholder='username' onChange={(e)=>{ this.onInputChange(e) }}/>    
              <input name='password' className='login-input' type='password' placeholder='password' onChange={(e)=>{ this.onInputChange(e) }}/>
              <input 
                className='login-button' 
                type='button' 
                onClick={ ()=>login(email, password) } 
                value='Sign-in'
              />
              <GoogleLogin  theme='dark'/>
              <span className='sign-up'>
                  don't have account yet? 
                {' '}
                <a className='sign-up-link' href='/sign-up' onClick={ (e) => this.changePage(e,'register') }>sign-up</a>
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
              <input name='email' className='login-input' placeholder='username'  onChange={(e)=>{ this.onInputChange(e) }}/>    
              <input name='password' className='login-input' type='password' placeholder='password'  onChange={(e)=>{ this.onInputChange(e) }}/>
              <input name='rePass' className='login-input' type='password' placeholder='repeat password'  onChange={(e)=>{ this.onInputChange(e) }}/>
              <input 
                className='login-button' 
                type='button' 
                onClick={ ()=>login(email, password) } 
                value='Sign-up'
              />
              <GoogleLogin buttonText='Sign up with Google' theme='dark'/>
              <span className='sign-up'>
                    already have an account?
                {' '}
                <a className='sign-up-link' href='/login' onClick={ (e) => this.changePage(e, 'login') }>sign-in</a>
              </span>
            </form>
          </div>
          )
      

      
    }
}