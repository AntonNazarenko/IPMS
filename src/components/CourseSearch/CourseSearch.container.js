import { connect } from 'react-redux'
import CourseSearchView from './CourseSearchView'
import { SearchCourse, SearchValue } from '../../redux/actions/course'

const mapStateToProps = (state = {}) => {
  const { course } = state
  const { courses, searchValue } = course
  return {
    courses,
    searchValue
  }
}

const mapDispatchToProps = dispatch => ({
  findCourse: (name) => {
    dispatch(SearchCourse(name))
  },
  saveInputValue: (value) => {
    dispatch(SearchValue(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearchView)