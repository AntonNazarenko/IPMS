/* eslint-disable react/no-unused-state */
import React from 'react'
import { Icon } from 'react-fa'
// eslint-disable-next-line no-unused-vars
import styles from './index.css'

export default class CourseSearchView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isSearchActive: true,
    }
  }

  onChange(e) {
    const { target } = e
    const { value } = target
    const { findCourse, saveInputValue } = this.props

    //saveInputValue(value)
    findCourse(value)
  }

  openSearch() {
    const { isSearchActive } = this.state
    this.setState({
      isSearchActive: !isSearchActive
    })
  }

  render() {
    const { isSearchActive } = this.state
    const { searchValue } = this.props
    return (
      <div className={ `course-search container ${isSearchActive ? 'active' : ''}` }>
        <input
          type='text'
          onChange={ e => this.onChange(e) }
          className={ `input ${isSearchActive ? 'active' : ''}` }
          placeholder='Search'
          aria-hidden='true'
          defaultValue={ searchValue }
        />
        <Icon name='search' onClick={ () => this.openSearch() } />
      </div>
    )
  }
}