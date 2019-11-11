import  React from 'react'
import NavbarButton from '../NavbarButton'
import styles from './index.css'

export default class Navbar extends React.Component {
    render () {
        return (
          
          <div className='navbar'>
            <div className='logo'>Eduline</div>
            <div className='side-menu'>
              <div className='language'>Eng</div>
              <div className='profile-img'>
                <NavbarButton iconName='user' to='profile' />
              </div>
              <div className='settings'>
                <NavbarButton iconName='cog' to='settings' />
              </div>
            </div>
          </div>
      )
    }
}