import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.css'


export default class LoginPage extends React.Component{
    
    render() {
        console.log(this.props)
        let { purchasedCourses, passedCourses, email, getCourse } = this.props
        purchasedCourses = purchasedCourses.map( course => {
            const coursePath = course.split(' ').join('-')
            return (
                <ul  onClick={()=> getCourse(coursePath)}>
                    <Link to={`course/${coursePath}`} style={{color:'lightGray'}}>
                        {course}
                    </Link>
                </ul>
            )
        })
        passedCourses = passedCourses.map( course => {
            const coursePath = course.split(' ').join('-')
            return (
                <ul  onClick={()=> getCourse(coursePath)}>
                    <a href='https://aakinshin.net/img/posts/dotnet/ms-mcp/mcp.png' target='_blank' style={{color:'lightGray'}}>
                        {course}
                    </a>
                </ul>
            )
        })
        return (
          <div className='profile-container'>
            <div className='avatar-container'>
                
            </div>
            <br />
            <div className='info-container'>
                <div className='username'>
                    <span>Username: </span>
                    <span>{ email }</span>
                </div>
                Purchased Courses:
                <li className='courses'>
                    { purchasedCourses }
                </li>
                You have certificates:
                <li className='courses'>
                    { passedCourses }
                </li>
            </div>
          </div>
        )
    }
}