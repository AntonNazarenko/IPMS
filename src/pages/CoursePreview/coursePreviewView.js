import React from 'react'

import Sidebar from '../../components/CourseSidebar'
import PurchaseButton from '../../components/PurchaseButton'


export default class CoursePreview  extends React.Component{

    render() {
        const { currentCourse = {}, currentPage = {}, changePage = '', email = '', isCurrentCoursePurchased = false} = this.props
        console.log('isCurrentCoursePurchased', isCurrentCoursePurchased)
        const { Preview = {} } = currentCourse 
        const { name = ''} = Preview
        const {video = '', description = ''} = currentCourse[currentPage] || {}
        return (
          <div className='course-preview-container'>
            <Sidebar currentCourse={ currentCourse } changePage={ changePage } isCoursePurchased={ isCurrentCoursePurchased }/>
            <div className='course-content'>
              {video ? (
                <iframe 
                  title='video'
                  width='60%' 
                  height='300px' 
                  src={ video } 
                  frameBorder='0' 
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
                  allowFullScreen
                />
            ): null}
               { currentPage === 'Preview' ? <PurchaseButton name={name} email={email} /> : null }
              <p className='description'>
                <b>Description:</b>
                { description || null }
              </p>
            </div>
          </div>
        )
    }
}