

import { connect } from 'react-redux'
import axios from 'axios'
// eslint-disable-next-line import/no-named-as-default-member
import modalView from './modalView'


const mapDispatchToProps = dispatch => {
    return {
        login(login, pass) {
            dispatch({ type: 'SET_AUTH', payload: '213QWESAD' })
            dispatch({
                type: 'REST',
                meta: {
                    url: 'https://LightcoralBlissfulPrintablecharacter--five-nine.repl.co/login',
                    method: 'POST', // axios method
                    handler: 'LOGIN',
                },
            })
        }
    }
}



export default connect(null, mapDispatchToProps)(modalView)