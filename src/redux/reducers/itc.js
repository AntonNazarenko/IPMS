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
            console.log(payload)
            return {
                ...state, 
                token: payload
            }
        }

        default: {
            return state
        }
            
    }
}

export default reducer