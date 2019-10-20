import { connect } from 'react-redux'
import CourseSearchView from './CourseSearchView'
import { SearchCourse } from '../../redux/actions/course'

const mapStateToProps = (state = {}, ownProps = {}) => {
   const { course } = state
    return {
        courses: course
    }
  }

  const mapDispatchToProps = dispatch => ({
    findCourse: (name) => {
        dispatch(SearchCourse(name))
    }
  })
  
  

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearchView)