import React from 'react'
import { Icon } from 'react-fa'

export default class Sidebar extends  React.Component { 
    render() {
        const { currentCourse, changePage, isCoursePurchased, test } = this.props
        let pages = Object.keys(currentCourse)
            pages = pages.map( page => {
                if(page === 'comments') { return }
                if(!isCoursePurchased) {
                  return (
                    <span className='sidebar-item'>
                      <p> <Icon name='lock' /> {page}</p>
                    </span>
                  )
                }
                return (
                  <span className='sidebar-item' onClick={ () => changePage(page) }>
                    <p> <Icon name='unlock' /> {page}</p>
                  </span>
                )
            })
        return (
          <div className='sidebar'>
            { pages }
          </div>
        )
    }
}