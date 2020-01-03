import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import styles from './index.css'

const preparedLinks = [
    {
        name: 'Courses',
    },
    {
        name: 'Create'
    }
]

export default class PageSwithcer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 'Courses',
        }
    }

    openLink(e, name) {
        this.setState({ page: name })
    }

    prepareLinks(linksData) {
        const links = []

        linksData.forEach(link => {
            const { name } = link
            const { page } = this.state

            const linkClass = classNames({
                'link': true,
                'link-active': page === name
            })

            links.push(
                <Link to={ `/${name}` } onClick={ (e) => this.openLink(e, name) } className={ linkClass }>{ name }</Link>
            )
        })
        return links
    }

    render() {
        return (
            <div className='links'>
                { this.prepareLinks(preparedLinks) }
            </div>
        )
    }
}