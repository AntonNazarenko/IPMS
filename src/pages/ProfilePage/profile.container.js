import { connect } from 'react-redux'
// eslint-disable-next-line import/no-unresolved
import profileView from './profileView'
import { GetCourse } from '../../redux/actions/course'

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state = {}, ownProps = {}) => {
  const { itc } = state
  const { purchasedCourses, email } = itc
  return {
    purchasedCourses,
    email
  }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourse: (id) => {
            dispatch(GetCourse(id))
          },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(profileView)