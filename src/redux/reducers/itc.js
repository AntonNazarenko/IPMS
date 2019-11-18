function getInitialState() {
    return {
        token: null
     }

}

function  reducer(state = getInitialState(), action = {}){
    const { type, payload } = action

    // eslint-disable-next-line default-case
    switch(type) {
        case 'LOGIN_POST_RES': {
            if(payload.toLowerCase() !== 'error') {
                return {
                    ...state, 
                    token: payload
                }
            }
            return {
                ...state
            }
        }

       case 'REG_POST_RES': {
        if(payload.toLowerCase() !== 'error') {
            return {
                ...state, 
                token: payload
            }
        }
        return {
            ...state
        }
    }

        case 'AUTH_DELETE': {
            return {
                ...state, 
                token: null
            }
        }

        default: {
            return state
        }
            
    }
}

export default reducer