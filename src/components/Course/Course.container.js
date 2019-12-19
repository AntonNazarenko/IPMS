import { connect } from 'react-redux'
import CourseView from './CourseView'
import { GetCourse } from '../../redux/actions/course'

const mapStateToProps = (state = {}) => {
  
  return {

  }
}

const mapDispatchToProps = dispatch => ({
  getCourse: (id) => {
    dispatch(GetCourse(id))
  },
  setCourseName: (name) => {
      dispatch({
          type: 'COURSE_SET_NAME',
          payload: name
      })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseView)