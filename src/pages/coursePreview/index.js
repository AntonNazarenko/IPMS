import React from 'react'


export default class CoursePreview  extends React.Component{
    
    render() {
        
        return (
          <div className='course-preview-container'>
            <div className='sidebar'>
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
            <div className='course-content'>
              <iframe 
                title='video'
                width='60%' 
                height='300px' 
                src='https://www.youtube.com/embed/vLnPwxZdW4Y' 
                frameBorder='0' 
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
                allowFullScreen
              />
              <p className='description'>
                <b>Description:</b>
                {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
              </p>
            </div>
          </div>
        )
    }
}