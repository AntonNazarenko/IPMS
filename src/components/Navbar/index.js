import  React from 'react'
import { Icon } from 'react-fa'
import styles from './index.css'
import { Link } from 'react-router-dom'

export default class Navbar extends  React.Component {
    render () {
        return (
        <div className='navbar'>
            <div className="logo">ITC</div>
            <div className="side-menu">
                <div className="language">Eng</div>
                <div className="profile-img">
                    <Icon name='user' />
                </div>
                <div className="settings">
                    <Icon name='cog' />
                </div>
            </div>
        </div>
      )
    }
}