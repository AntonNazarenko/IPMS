

import { connect } from 'react-redux'
import axios from 'axios'
import modalView from './modalView'


const mapDispatchToProps = dispatch => {
    return {
        login (login, pass) {
            console.log(login, pass)
            dispatch({type: 'SET_AUTH', payload: '213QWESAD'})
            axios.post('/login',{
                login,
                pass
            })
        }
    }
}
  
  

export default connect(null, mapDispatchToProps)(modalView)