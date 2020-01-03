import { connect } from 'react-redux'
// eslint-disable-next-line import/no-unresolved
import addingCourse from './AddingCourseView'
import { dispatch } from 'rxjs/internal/observable/pairs'

import { CreateCourse } from '../../redux/actions/course'

// eslint-disable-next-line no-unused-vars
// const mapStateToProps = (state = {}, ownProps = {}) => {
//   const { course, itc } = state
//   const { email = '', purchasedCourses = [] } = itc
//   const { currentCourse = {}, currentPage ={ } } = course
//   const { Preview = {} } =  currentCourse
//   return {
//     currentCourse,
//     currentPage,
//     email,
//     isCurrentCoursePurchased
//   }
// }


const mapDispatchToProps = dispatch => {
    return { 
        createCourse(data) {
            console.log(data)
            dispatch(CreateCourse(data))
        },
    }
}

export default connect(null, mapDispatchToProps)(addingCourse)