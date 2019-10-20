import React from 'react'
import { searchValue } from '../../redux/actions/'

import styles from './styles.css'

export default class CourseView  extends React.Component{
    
    onChange(e ) {
       const { target } = e
       const { value } = target

      const { findCourse } = this.props

      findCourse(value)
    }

    render() {
        return (
            <div className="course-search">
                <input onChange={(e, d)=>this.onChange(e, d)} type='text' placeholder='search for course...'/>
            </div>
        )
    }
}