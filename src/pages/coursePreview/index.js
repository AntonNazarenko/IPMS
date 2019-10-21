import React from 'react'


export default class CoursePreview  extends React.Component{
    
    render() {
        
        return (
          <div className='course-preview-container'>
            <div className="sidebar">
                <span className='sidebar-item sidebar-item-active'>
                    <p>Preview</p>
                </span>
                <span className='sidebar-item'>
                    <p>Part 1</p>
                </span>
                <span className='sidebar-item'>
                    <p>Part 2</p>
                </span>
                 <span className='sidebar-item'>
                    <p>Part 3</p>
                </span>
            </div>
            <iframe 
              title='video'
              width='60%' 
              height='300px' 
              src="https://www.youtube.com/embed/vLnPwxZdW4Y" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        )
    }
}