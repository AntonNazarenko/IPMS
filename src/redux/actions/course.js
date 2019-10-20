
function SearchCourse (name) {
    return {
        type: 'SEARCH_COURSE',
        payload: name
    }
}

export {
    SearchCourse
}