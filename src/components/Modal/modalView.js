import React from 'react'
import styles from './index.css'
import { Redirect } from 'react-router-dom'
export default class Navbar extends React.Component {

    state = {
        page: 'login'
    }

    changePage (e, page) {
        e.preventDefault()
        this.setState({page})
    }

    render () {
      const { login } = this.props
      const  { page  } = this.state
      if (page === 'login') {
        return (
          <div className='modal-container'>
            <div className='modal-content'>
            <Redirect to='/login' />
              <span className='logo'>Eduline</span>
              <input className='login-input' placeholder='username' />    
              <input className='login-input' type='password' placeholder='password' />
              <input 
                className='login-button' 
                type='button' 
                onClick={ ()=>login() } 
                value='Sign-in'
              />
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
            <div className='modal-content'>
            <Redirect to='/registration' />
              <span className='logo'>Eduline</span>
              <input className='login-input' placeholder='username' />    
              <input className='login-input' type='password' placeholder='password' />
              <input className='login-input' type='password' placeholder='repeat password' value=''/>
              <input 
                className='login-button' 
                type='button' 
                onClick={ ()=>login() } 
                value='Sign-up'
              />
              <span className='sign-up'>
                    already have an account?
                {' '}
                <a className='sign-up-link' href='/login' onClick={ (e) => this.changePage(e, 'login') }>sign-in</a>
              </span>
            </div>
          </div>
          )
      

      
    }
}