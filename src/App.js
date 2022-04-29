import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import CardContainer from "./components/CardContainer/CardContainer";
import Socials from './components/Socials/Socials';
import PropTypes from 'prop-types';

function App() {
    const skillsArr = ["HTML","CSS","JavaScript","Frontend","GitHub"];
    const interestsArr = ["React","Node.js","TypeScript"];
  return (
    <div className="App">
        <Header/>
        <CardContainer
            skills={skillsArr}
            interests={interestsArr}/>
        <Socials/>
    </div>
  );
}

export default App;
