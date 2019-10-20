import React from 'react'
import CourseCard from '../../components/Course'

export default class CourseView  extends React.Component{
    
    constructor(props) {
        super(props)
        this.courses = []
    }

    prepareCourses() {
        const { 
            courses
        } = this.props

        courses.forEach(course => {
            const { price, img, name, rate, time } = course

            this.courses.push(
            <CourseCard
                price = { price }
                img = { img }
                name = { name }
                rate = { rate }
                time = { time }
            />
            )
        })
    }

    render() {
        this.prepareCourses()
        return (
            <div className="course-container">
                {this.courses} 
            </div>
        )
    }
}