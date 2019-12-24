/* eslint-disable */
import React from 'react'

import Sidebar from '../../components/CourseSidebar'
import PurchaseButton from '../../components/PurchaseButton'

export default class CoursePreview  extends React.Component{

    checkAnswer(e, questionId, correct) {

      this.setState({ [questionId]: correct })
      console.log(this.state)
    }

    checkTest() {
      let rightAnswers = 0
      const { currentCourse = {}, email = '', addCertificate } = this.props
      const { name } = currentCourse.Preview
      Object.keys(this.state).map((e) => {
        if(this.state[e] === true) {
          rightAnswers++
        }
      })
      if(rightAnswers > 3) {
        addCertificate(name, email)
      } else {
        alert('Wrong answer, try again!')
      }
    }

    render() {
        const { currentCourse = {}, currentPage = {}, changePage = '', email = '', isCurrentCoursePurchased = false} = this.props
        console.log('isCurrentCoursePurchased', isCurrentCoursePurchased)
        const { Preview = {} } = currentCourse 
        const { name = ''} = Preview
        const {video = '', description = '', test = []} = currentCourse[currentPage] || {}
        return (
          <div className='course-preview-container'>
            <Sidebar currentCourse={ currentCourse } changePage={ changePage } isCoursePurchased={ isCurrentCoursePurchased } />
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
              {test ? (
                <> 
                  {
                test.map(q => 
                (
                  <>
                    <div className='description'>{q.question}</div>
                    <div style={ {'text-align': 'left'} }>
                      {q.possibleAnswers.map(a => (
                        <div>
                          <input type='radio' name={ q.id } value={ a.correct } onChange={ (e) => this.checkAnswer(e, q.id, a.correct) } />
                          <span className='white-font'>{ a.answer }</span>
                          <br />
                        </div>
                    ))}
                    </div>
                  </>
                  )
                )
                
                } { currentPage ==='Third' ?<button style={ {width: '150px', height: '50px', 'font-size': '25px'} } onClick={()=> this.checkTest()}> SUBMIT </button> :null}
                </>
            ) : null}
              { currentPage === 'Preview' ? <PurchaseButton name={ name } email={ email } /> : null }
              {description ? (
                <p className='description'>
                  <b>Description:</b>
                  { description || null }
                </p>
): null}
            </div>
          </div>
        )
    }
}