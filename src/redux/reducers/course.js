function getInitialState() {
    return [
        {
            price:'12.99$',
            rate:'4.5',
            name:'C++ complete course.',
            time:'13h45m',
            img:'https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-6cea5a12d5cd.small.jpg',
        },
        {
            price:'12.99$',
            rate:'4.5',
            name:'C++ complete course.',
            time:'13h45m',
            img:'https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-6cea5a12d5cd.small.jpg',
        },
        {
            price:'12.99$',
            rate:'4.5',
            name:'C++ complete course.',
            time:'13h45m',
            img:'https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-6cea5a12d5cd.small.jpg',
        },
    ]
}

function reducer(state = getInitialState(), action = {}) {
    const { type, payload = {} } = action
    switch (type) {
      
      default: {

        return getInitialState()
      }
    }
  }
  
  export default reducer