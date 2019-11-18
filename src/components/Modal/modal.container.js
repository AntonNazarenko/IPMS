

import { connect } from 'react-redux'
import axios from 'axios'
// eslint-disable-next-line import/no-named-as-default-member
import modalView from './modalView'


const mapDispatchToProps = dispatch => {
    return {
        login(email, pass) {
            dispatch({
                type: 'REST',
                meta: {
                    url: 'https://LightcoralBlissfulPrintablecharacter--five-nine.repl.co/login',
                    method: 'POST', // axios method
                    handler: 'LOGIN',
                    payload: {
                        params: {
                            email,
                            pass
                        }
                    }
                },
            })
        }, 
        register(email, pass, rePass) { 
            dispatch({
                type: 'REST',
                meta: {
                    url: 'https://LightcoralBlissfulPrintablecharacter--five-nine.repl.co/register',
                    method: 'POST', // axios method
                    handler: 'REG',
                    payload: {
                        params: {
                            email,
                            pass,
                            rePass
                        }
                    }
                },
            })
        }
    }
}



export default connect(null, mapDispatchToProps)(modalView)