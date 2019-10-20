import { connect } from 'react-redux'
import courseView from './courseView'

const mapStateToProps = (state = {}, ownProps = {}) => {
   const { course } = state
    return {
        courses: course
    }
  }
  
  

export default connect(mapStateToProps, null)(courseView)