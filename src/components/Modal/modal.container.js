

import { connect } from 'react-redux'
import axios from 'axios'
// eslint-disable-next-line import/no-named-as-default-member
import modalView from './modalView'


const mapDispatchToProps = dispatch => {
    return {
        login(login, pass) {
            dispatch({ type: 'SET_AUTH', payload: '213QWESAD' })
            axios.post('/login', {
                login,
                pass
            })
        }
    }
}



export default connect(null, mapDispatchToProps)(modalView)