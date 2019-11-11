import  React from 'react'
import { Icon } from 'react-fa'
import { Link } from 'react-router-dom'
import styles from './index.css'

export default class Navbar extends React.Component {

    render () {
        const { iconName, to } = this.props
        return (
          <>
            <Link to={ `/${ to }` } className='navbar-link'> 
              <Icon name={ `${ iconName }` } />
            </Link>
          </>
      )
    }
}