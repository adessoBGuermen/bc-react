import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import CardContainer from "./components/CardContainer/CardContainer";
import Socials from './components/Socials/Socials';
import FormContainer from './components/FormContainer/FormContainer';
import useContacts from './utils/useContacts';

function App() {
    const skillsArr = ["HTML","CSS","JavaScript","Frontend","GitHub"];
    const interestsArr = ["React","Node.js","TypeScript"];

    const [contacts, addContact] = useContacts();

  return (
    <div className="App">
        <Header/>
        <CardContainer
            skills={skillsArr}
            interests={interestsArr}/>
        <FormContainer
            heading="Form"
            sendDataOnSubmit={addContact}
            contacts={contacts}/>
        <Socials/>
    </div>
  );
}

export default App;
