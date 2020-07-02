import facerecognition from '../images/facerecorgnition.jpeg';
import robot from '../images/robotfriends.png';
import automation from '../images/react_automation.png'; 
import marvel from '../images/marvel.png';

const projects = [
  {
    name:'automation',
    image: automation,
    description:{
      h3: 'React Automation',
      resume: 'Fullstack Smart Home app',
      technos: 'React.js, node.js, MongoDB, socket.io, Arduinos',
      link: 'https://practical-bell-ac50ec.netlify.app',
      github: 'https://github.com/adrianmonteil1983/react_automation_front'
    } 
  },
  {
    name:'facerecognition',
    image: facerecognition,
    description:{
      h3: 'Face Recognition',
      resume: 'fullstack face recognition app',
      technos: 'react.js, node.js, postgresSQL, rest API, heroku',
      link: 'https://salty-beyond-55903.herokuapp.com',
      github: 'https://github.com/adrianmonteil1983/facerecognitionbrain'
    }
  },
  {
    name:'robotfriend', 
    image: robot, 
    description:{
      h3: 'Robots Contact',
      resume: 'pwa search app',
      technos: 'reactjs, redux, redux thunk, pwa, rest API',
      link: 'https://adrianmonteil1983.github.io/robotsfriend/',
      github: 'https://github.com/adrianmonteil1983/robotsfriend'
    }
  },
  { 
    name:'marvel', 
    image: marvel,
    description:{
      h3: 'Vue Marvel',
      resume: 'Vue app fetching marvel characters with informations',
      technos: 'Vue.js, Vuex, Vue router, Rest API, css Grid, flexbox, Sass',  
    }
  },
]

export default projects