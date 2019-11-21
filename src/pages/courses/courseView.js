import React from 'react'
import CourseCard from '../../components/Course'
import CourseSearch from '../../components/CourseSearch'

export default class CourseView extends React.Component {

  constructor(props) {
    super(props)
    const { loadCourses } = this.props
    loadCourses()
  }

  shouldComponentUpdate(nextProps) {
    return true
  }

  prepareCourses() {
    const {
      courses = {},
    } = this.props

    const coursesArray = courses.courses || []
    this.courses = []
    coursesArray.forEach(course => {
      const { price, img, name, rate, time, visible } = course
      if(!visible) return
      this.courses.push(
        <CourseCard
          price={ price }
          img={ img }
          name={ name }
          rate={ rate }
          time={ time }
        />)
    })
  }

  render() {
    this.prepareCourses()
    return (
      <>
        <CourseSearch />
        <div className='course-container'>
          { this.courses }
        </div>
      </>
    )
  }
}