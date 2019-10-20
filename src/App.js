import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CourseCard from './components/Course'

import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import StoreWrapper from './StoreWrapper'
import Courses from '../src/pages/courses'

const courses = [<CourseCard 
  price='12.99$'
  rate='4.5'
  name='C++ complete course.'
  time='13h45m'
  img='https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-6cea5a12d5cd.small.jpg'
/>,
<CourseCard 
  price='9.99$'
  rate='5.0'
  name='Python complete course.'
  time='3h30m'
  img='https://i.ytimg.com/vi/lOVpSh_0pTQ/maxresdefault.jpg'
/>,
<CourseCard 
  price='3.99$'
  rate='3.5'
  name='C# complete course.'
  time='3h45m'
  img='https://www.learningtree.com/images/course/grabbers/419-grabber.png'
/>,
  <CourseCard 
  price='6.99$'
  rate='4.5'
  name='Unix complete course.'
  time='3h45m'
  img='https://i0.wp.com/www.apponwellness.com/wp-content/uploads/2018/05/Certificate-of-Unix-Shell-Scripting-Training-Course.png?fit=520%2C277&ssl=1'
/>,
<CourseCard 
  price='11.99$'
  rate='5.0'
  name='React complete course.'
  time='3h45m'
  img='https://elysiumacademy.org/wp-content/uploads/2018/12/REACT-JS.jpg'
/>,
<CourseCard 
  price='29.99$'
  rate='5'
  name='NODE.JS complete course.'
  time='3h45m'
  img='https://i.udemycdn.com/course/750x422/82778_94fa_6.jpg'
/>]

function App() {
  return (
    <div className="App">
        <StoreWrapper>
            <Navbar />
            <Courses />
        </StoreWrapper>
    </div>
  );
}

export default App;
