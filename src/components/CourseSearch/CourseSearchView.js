import React from 'react'

import styles from './styles.css'

export default class CourseView  extends React.Component{
    
    onChange(e) {
       const { target } = e
       const { value } = target

      const { findCourse } = this.props

      findCourse(value)
    }

    render() {
        return (
          <div className="course-search">
            <input onChange={(e)=>this.onChange(e)} type='text' placeholder='search for course...' />
          </div>
        )
    }
}