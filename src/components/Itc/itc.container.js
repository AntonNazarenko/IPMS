

import { connect } from 'react-redux'
import ItcView from './itcView'


const mapStateToProps = (state = {}) => {
   const { itc } = state
    return {
        itc
    }
  }
  
  

export default connect(mapStateToProps)(ItcView)