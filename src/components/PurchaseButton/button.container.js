

import { connect } from 'react-redux'
import ButtonView from './buttonView'


const mapDispatchToProps = dispatch => {
    return {
        purchase(name, email) {
            console.log(name, email)
            dispatch({
                type:'REST',  
                meta: {
                url: `course-purchase`,
                method: 'POST', // axios method
                handler: 'COURSE_PURCHASE',
                payload: {
                    params: {
                        name,
                        email
                    }
                }
             } })
        }
    }
}
  
  

export default connect(null, mapDispatchToProps)(ButtonView)