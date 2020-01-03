/* eslint-disable */
import React from 'react'

import Sidebar from '../../components/CourseSidebar'
import PurchaseButton from '../../components/PurchaseButton'
import './index.css'
export default class CoursePreview  extends React.Component{
    state = {
      commentText: '',
      fails: 0,
    }
    shouldComponentUpdate() {
      return true
    }

    checkAnswer(e, questionId, correct) {

      this.setState({ [questionId]: correct })
      console.log(this.state)
    }

    updateText({ value }) { 
       this.setState({commentText: value})
    }

    postComment(text) {
      const { currentCourse = {}, email = '', postComment } = this.props
      const { name } = currentCourse.Preview
      const { commentText } = this.state
      postComment(name, commentText, email)
    }

    checkTest() {
      let rightAnswers = 0
      const { fails } = this.state
      const { currentCourse = {}, email = '', addCertificate } = this.props
      let { name } = currentCourse.Preview
      Object.keys(this.state).map((e) => {
        if(this.state[e] === true) {
          rightAnswers++
        }
      })
      if(rightAnswers > 3) {
        name += ` - ${rightAnswers * 20 - fails * 3}%`
        addCertificate(name, email)
      } else {
        alert('Wrong answer, try again!')
        this.setState({fails: fails + 1 })
      }
    }

    render() {
        const { currentCourse = {}, currentPage = {}, changePage = '', email = '', isCurrentCoursePurchased = false} = this.props
        console.log('isCurrentCoursePurchased', isCurrentCoursePurchased)
        const { Preview = {}, comments = []} = currentCourse 
        const { name = ''} = Preview
        const {video = '', description = '', test = []} = currentCourse[currentPage] || {}
        const { commentText } = this.state
        return (
          <div className='course-preview-container'>
            <Sidebar test={test} currPage={currentPage} currentCourse={ currentCourse } changePage={ changePage } isCoursePurchased={ isCurrentCoursePurchased } />
            <div className='course-content'>
              {video ? (
                <>
                <iframe 
                  title='video'
                  width='60%' 
                  height='300px' 
                  src={ video } 
                  frameBorder='0' 
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
                  allowFullScreen
                />
                </>
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
                
                } { currentPage ==='Test' ?<button style={ {width: '150px', height: '50px', 'font-size': '25px'} } onClick={()=> this.checkTest()}> SUBMIT </button> :null}
                </>
            ) : null}
              { currentPage === 'Preview' ? <PurchaseButton name={ name } email={ email } /> : null }
              {description ? (
                <>
                <p className='description'>
                  <b>Description:</b>
                  { description || null }
                </p>
                <div className='itc-course-comment-area'>
                  <textarea onChange={(e) => this.updateText(e.target)} value={commentText} style={{width: '50%', height: '100px'}} placeholder='post your comment'>

                  </textarea>
                  <button className='itc-button' onClick={()=> this.postComment(commentText)}>post comment</button>
                </div>
                <div>
                {comments.map(comment => {
                   return( <div className='comment-container'>
                      <div className='comment-username'>{comment.username}</div>
                      <div className='comment-text'>{comment.text}</div>
                    </div>)
                  })}
                </div>
                </>

): null}
            </div>
          </div>
        )
    }
}