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

function AddCertificate(name, email) {
    return {
        type: 'REST',
        meta: {
           url: 'add-certificate',
           method: 'POST', // axios method
           handler: 'ADD_CERTIFICATE',
           payload: {
               params: {
                    email,
                    name, 
                }
           }
        } 
    }
}

function PostComment(name, text, username) {
    return {
        type: 'REST',
        meta: {
           url: 'post-comment',
           method: 'POST', // axios method
           handler: 'POST_COMMENT',
           payload: {
               params: {
                    name,
                    text,
                    username, 
                }
           }
        } 
    }
}

function CreateCourse(data) {
    return {
        type: 'REST',
        meta: {
           url: 'create-course',
           method: 'POST', // axios method
           handler: 'CREATE_COURSE',
           payload: {
               params: {
                    ...data 
                }
           }
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

export {
    AddCertificate
}

export {
    PostComment
}

export {
    CreateCourse
}