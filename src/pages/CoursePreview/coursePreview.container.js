import { connect } from 'react-redux'
// eslint-disable-next-line import/no-unresolved
import coursePreview from './coursePreviewView'
import { dispatch } from 'rxjs/internal/observable/pairs'

import { AddCertificate } from '../../redux/actions/course'

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state = {}, ownProps = {}) => {
  const { course, itc } = state
  const { email = '', purchasedCourses = [] } = itc
  const { currentCourse = {}, currentPage ={ } } = course
  const { Preview = {} } =  currentCourse
  const { name = '' } = Preview

  let isCurrentCoursePurchased = false
  if(purchasedCourses.includes(name.split('-').join(' '))) isCurrentCoursePurchased = true

  return {
    currentCourse,
    currentPage,
    email,
    isCurrentCoursePurchased
  }
}


const mapDispatchToProps = dispatch => {
    return { 
        changePage(page) {
            dispatch({
                type: 'COURSE_CHANGE_PAGE',
                payload: page
            })
        },
        addCertificate(name, email) {
            dispatch(AddCertificate(name, email))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(coursePreview)