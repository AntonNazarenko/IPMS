import { connect } from 'react-redux'
// eslint-disable-next-line import/no-unresolved
import courseView from './courseView'

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state = {}, ownProps = {}) => {
  const { course } = state
  return {
    courses: course
  }
}

export default connect(mapStateToProps, null)(courseView)