function getInitialState () {
    return {
        token: null
     }

}

function  reducer (state = getInitialState(), action = {}){
    const { type, payload } = action

    // eslint-disable-next-line default-case
    switch(type) {
        case 'SET_AUTH': {
            return {
                ...state, 
                token: payload
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