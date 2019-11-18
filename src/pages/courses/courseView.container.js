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

const mapDispatchToProps = dispatch => {
  return {
    loadCourses() {
      dispatch({
        type: 'REST',
        meta: {
            url: 'https://LightcoralBlissfulPrintablecharacter--five-nine.repl.co/courses',
            method: 'GET', // axios method
            handler: 'COURSES',
        },
    })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(courseView)