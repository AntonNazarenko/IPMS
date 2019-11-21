function SearchCourse(name) {
    return {
        type: 'SEARCH_COURSE',
        payload: name
    }
}

function SearchValue(value) {
    return {
        type: 'SEARCH_VALUE',
        payload: value
    }
}

function GetCourse(id) {
    return {
        type: 'REST',
        meta: {
           url: `course/${id}`,
           method: 'GET', // axios method
           handler: 'COURSE_DATA',
        } 
    }
}

export {
    SearchCourse
}

export {
    SearchValue
}

export {
    GetCourse
}