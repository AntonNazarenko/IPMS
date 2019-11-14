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

export {
    SearchCourse
}

export {
    SearchValue
}