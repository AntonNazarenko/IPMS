import React from 'react'
import './index.css'

export default class AddingCourse extends React.Component{
    state = {
        forms: [],
        courseName: '',
        pagesData: {}

    }
    addForm (type) {
        const { forms } = this.state
        const currentFormIndex = forms.length
        forms.push(type)
        this.setState({forms})
    }
    
    setTitle({ value }) { 
        this.setState({courseName: value})
    }

    setImage({ value }) { 
        this.setState({courseImage: value})
    }

    setPageData(target, type = 'page', i) {
        const { name = '', value = ''} = target
        console.log(target)
        const  index  = +(name.split('-')[name.split('-').length - 1])
        const pagesData = {...this.state.pagesData}
        if(type === 'test') {

            this.setState({
                pagesData: {
                    ...pagesData,
                    [`test-${i}`]: {
                        ...pagesData[`test-${i}`],
                        [name]: value
                    }
                }
            })
            return
        }
        this.setState({
            pagesData: {
                ...pagesData,
                [`page-${index}`]: {
                    ...pagesData[`page-${index}`],
                    [name]: value
                }
            }
        })
    }

    render() {
        const { forms, courseName, courseImage } = this.state
        const { createCourse } = this.props

        return (
          <div>
              <button className='itc-button' onClick={()=> {this.addForm('video')}}>
                  add video page
              </button>
              <button className='itc-button' onClick={()=> {this.addForm('test')}}>
                  add test page
              </button>
              <button className='itc-button' onClick={() => {createCourse({
                  pagesData: this.state.pagesData,
                  courseName,
                  courseImage
              })}}>
                 create course
              </button>
              <div style={{marginTop: '30px', color: 'white'}}>
                  <label>
                      Course name:
                  </label>
                  <input className='test-input' placeholder='course name' onChange={({ target }) => this.setTitle(target) }>
                  </input>
                  <label>
                      Course image:
                  </label>
                  <input className='test-input' placeholder='course image url' onChange={({ target }) => this.setImage(target) }>
                  </input>
              </div>
             {
                 forms.map((formType, index) => {
                     switch(formType) {
                         case 'video': {
                             return (
                                <div style={{color: 'white', padding: '15px'}}>
                                    <li className='form-item'>
                                        <label for={`video-page-title-${index}`}>Title: </label>
                                        <input className='test-input' onChange={(e) => {this.setPageData(e.target)}} placeholder='page title or description' name={`video-page-title-${index}`}></input>
                                    </li>
                                    <li  className='form-item'>
                                        <label for={`video-url-${index}`}>Video: </label>
                                        <input className='test-input' onChange={(e) => {this.setPageData(e.target)}} placeholder='video url' name={`video-url-${index}`}></input>
                                    </li>
                                    <li  className='form-item'>
                                        <label for={`video-page-text-${index}`}>Text: </label>
                                        <textarea  onChange={(e) => {this.setPageData(e.target)}} name={`video-page-text-${index}`} placeholder='page text'></textarea>
                                    </li>
                                </div>
                             )
                         }
                         case 'test': {
                            return (
                                <div style={{color: 'white', padding: '15px'}}>
                                   <li  className='form-item'>
                                       <li className='form-item'>
                                        <label for={`test-quest`}>Question: </label>
                                            <input className='test-input' onChange={(e) => {this.setPageData(e.target, 'test', index)}} placeholder='question' name={`test-quest`}></input>
                                       </li>
                                       <li className='form-item'>
                                        <input className='test-input' name={`test-answ-1`} placeholder='answear' onChange={(e) => {this.setPageData(e.target, 'test', index)}}></input>
                                            <input type='radio' name={`test-radio-1`} onChange={(e) => {this.setPageData(e.target, 'test', index)}}/>
                                       </li>
                                       <li className='form-item'>
                                        <input name={`test-answ-2`} className='test-input' placeholder='answear' onChange={(e) => {this.setPageData(e.target, 'test', index)}}  ></input>
                                            <input type='radio' name={`test-radio-2`} onChange={(e) => {this.setPageData(e.target, 'test', index)}} />
                                       </li>
                                       <li className='form-item'>
                                       <input name={`test-answ-3`} className='test-input' placeholder='answear' onChange={(e) => {this.setPageData(e.target, 'test', index)}}></input>
                                        <input type='radio' name={`test-radio-3`} onChange={(e) => {this.setPageData(e.target, 'test', index)}}/>
                                       </li>
                                       <li className='form-item'>
                                       <input name={`test-answ-4`} className='test-input' placeholder='answear' onChange={(e) => {this.setPageData(e.target, 'test', index)}}></input>
                                        <input type='radio' name={`test-radio-4`} onChange={(e) => {this.setPageData(e.target, 'test', index)}}/>
                                       </li>
                                    </li>
                                </div>
                             )
                         }
                     }
                 })
             }
          </div>
        )
    }
}