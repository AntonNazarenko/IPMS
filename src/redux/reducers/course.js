/* eslint-disable no-unused-vars */
function getInitialState() {
    return  {
    }
}

function reducer(state = getInitialState(), action = {}) {
    const { type, payload } = action
    // eslint-disable-next-line no-underscore-dangle
    console.log(payload)
    switch(type) {
        case 'SEARCH_COURSE': {
            const _state = { ...state }
            for(let i = 0; i < _state.courses.length; i += 1) {
                if(_state.courses[i].name.toLowerCase().indexOf(payload.toLowerCase()) === -1) {
                    _state.courses[i].visible = false
                } else {
                    _state.courses[i].visible = true
                }
            }
            return {
                ..._state
            }
        }

        case 'SEARCH_VALUE': {
            return {
                ...state,
                searchValue: payload
            }
        }

        case 'COURSES_GET_RES': {
            return { 
                ...state,
                courses: payload.courses
            }
        }

        case 'COURSE_DATA_GET_RES': {
            return { 
                ...state,
                currentCourse: payload,
                currentPage: 'Preview'
            }
        }

        case 'COURSE_CHANGE_PAGE': {
            return {
                ...state,
                currentPage: payload
            }
        }

        default: {
            return state
        }
    }
}

export default reducer