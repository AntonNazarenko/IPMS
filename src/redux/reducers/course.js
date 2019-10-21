/* eslint-disable no-unused-vars */
function getInitialState() {
    return (
        {
            courses: [
            {
                price:'9.99$',
                visible: true,
                rate:'4.5',
                name:'Python complete course',
                time:'3h15m',
                img:'https://i.ytimg.com/vi/lOVpSh_0pTQ/maxresdefault.jpg',
            },
            {
                price:'12.99$',
                visible: true,
                rate:'5',
                name:'C++ complete course',
                time:'13h45m',
                img:'https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-6cea5a12d5cd.small.jpg',
            },
            {
                price:'29.99$',
                visible: true,
                rate:'2.5',
                name:'C# complete course',
                time:'13h45m',
                img:'https://i.udemycdn.com/course/750x422/88750_c444_7.jpg',
            },{
                price:'9.99$',
                visible: true,
                rate:'5.0',
                name:'Unix complete course',
                time:'3h15m',
                img:'https://i0.wp.com/www.apponwellness.com/wp-content/uploads/2018/05/Certificate-of-Unix-Shell-Scripting-Training-Course.png?fit=520%2C277&ssl=1',
            },
            {
                price:'12.99$',
                visible: true,
                rate:'5.0',
                name:'JS complete course',
                time:'13h45m',
                img:'https://i.udemycdn.com/course/750x422/63612_8797_4.jpg',
            },
            {
                price:'29.99$',
                visible: true,
                rate:'4.0',
                name:'React complete course',
                time:'13h45m',
                img:'https://miro.medium.com/max/2400/0*vc4LVhHM3tH-2Sfh.jpg',
            }]
        }
    )
}

function reducer(state = getInitialState(), action = {}) {
    const { type, payload } = action
    switch (type) {
      case 'SEARCH_COURSE': {
        // eslint-disable-next-line no-underscore-dangle
        const _state = { ...state}
        for(let i = 0; i < _state.courses.length; i += 1) {
            if(_state.courses[i].name.toLowerCase().indexOf(payload.toLowerCase()) === -1) {
                _state.courses[i].visible = false
            } else {
                _state.courses[i].visible = true
            }
        }
         return  {
             ..._state
         }


      }
      default: {
        
        return getInitialState()
      }
    }
  }
  
  export default reducer