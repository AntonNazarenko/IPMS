

import { connect } from 'react-redux'
import NavbarView from './navbarView'


const mapDispatchToProps = dispatch => {
    return {
        logout() {
            dispatch({type:'AUTH_DELETE'})
        }
    }
}
  
  

export default connect(null, mapDispatchToProps)(NavbarView)