import  React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './index.css'

export default class ButtonView extends React.Component {
    render() {
        const { purchase, email, name } = this.props
        return (
          <button type='button' className='login-button' onClick={ () => purchase(name, email) }>
                Buy for 12.99$
          </button>
        )
    }
}