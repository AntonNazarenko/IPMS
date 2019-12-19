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
            const { token, email, purchasedCourses } = payload
            if(token && email) {
                return {
                    ...state, 
                    token,
                    email, 
                    purchasedCourses
                }
            }
            return {
                ...state
            }
        }

       case 'REG_POST_RES': {
        const { token, email, purchasedCourses } = payload
        if(token && email) {
            return {
                ...state, 
                token,
                email, 
                purchasedCourses
            }
        }
        return {
            ...state
        }
    }

    case 'COURSE_PURCHASE_POST_RES': {
        alert(payload.msg)
        return { 
            ...state,
            purchasedCourses: payload.courses
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