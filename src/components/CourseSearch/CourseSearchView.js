/* eslint-disable react/no-unused-state */
import React from 'react'

import { Icon } from 'react-fa'

import styles from './styles.css'

export default class CourseView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        isSearchActive: true,
    }
  }

  onChange(e) {
    const { target } = e
    const { value } = target

    const { findCourse } = this.props

    findCourse(value)
  }

  openSearch(e) {
      const { isSearchActive } = this.state
      this.setState({
          isSearchActive: !isSearchActive
      })
  }

  render() {
    const { isSearchActive } = this.state

    return (
      <div className={ `course-search container ${isSearchActive ? 'active' : ''}` }>
        <input
          type='text'
          onChange={ e => this.onChange(e) }
          className={ `input ${isSearchActive ? 'active' : ''}` }
          placeholder='Search'
          aria-hidden='true'
        />
        <Icon name='search' onClick={ e => this.openSearch(e) } />
      </div>
    )
  }
}