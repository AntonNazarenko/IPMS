import React from 'react'
import { Route } from 'react-router'

import { Redirect } from 'react-router-dom'
import Navbar from '../Navbar'
import CoursePage from '../../pages/Courses'
import AddingCourse from '../../pages/AddingCourse'
import CoursePreviewPage from '../../pages/CoursePreview'
import PageSwithcer from '../PageSwitcher'
import LoginPage from '../../pages/LoginPage'
import ProfilePage from '../../pages/ProfilePage'



export default class Itc extends React.Component {
    
    render() {
      const { itc } = this.props
      const { token } = itc
      if(!token) { 
          return (
            <div className='App'>
              <LoginPage />
            </div>
           )
      }

        return (

          <div className='App'>
            <Navbar />
            <PageSwithcer />
            <Redirect exact from='' to='/Courses' />
            <Route exec path='/courses' component={ CoursePage } />
            <Route path='/create' component={ AddingCourse } />
            <Route path='/course' component={ CoursePreviewPage } />
            <Route path='/profile' component={ ProfilePage } />
          </div>
        )
    }

}