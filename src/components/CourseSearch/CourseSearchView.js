import React from 'react'

import classNames from 'classnames'

import styles from './styles.css'

export default class CourseView extends React.Component {
  onChange(e) {
    const { target } = e
    const { value } = target

    const { findCourse } = this.props

    findCourse(value)
  }

  openSearch(e) {}

  render() {
    return (
      <div className={'container'}>
        <input
          type="text"
          onChange={e => this.onChange(e)}
          class="input"
          placeholder="Search"
        />
        <i
          class="fa fa-search"
          onClick={e => this.openSearch(e)}
          aria-hidden="true"
        ></i>
      </div>
    )
  }
}
