import React from 'react' 

import { Link } from 'react-router-dom'

export default class PageSwithcer extends React.Component {
    render() { 
        return(
            <div className="links">
                <Link to='/'> Main </Link>
                <Link to='/courses'> Courses </Link>
            </div>
        )
    }
}