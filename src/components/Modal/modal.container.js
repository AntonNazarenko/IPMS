

import { connect } from 'react-redux'

import modalView from './modalView'


const mapDispatchToProps = dispatch => {
    return {
        login () {
            dispatch({type: 'SET_AUTH', payload: '213QWESAD'})
        }
    }
}
  
  

export default connect(null, mapDispatchToProps)(modalView)