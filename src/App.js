import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import CardContainer from "./components/CardContainer/CardContainer";
import Socials from './components/Socials/Socials';
import FormContainer from './components/FormContainer/FormContainer';
import { useEffect, useState } from 'react';
import { addContactToApi, getAllContacts } from './ContactApiService';

function App() {
    const skillsArr = ["HTML","CSS","JavaScript","Frontend","GitHub"];
    const interestsArr = ["React","Node.js","TypeScript"];

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        loadContacts();
    }, []);
    async function loadContacts() {
        const apiContacts = await getAllContacts();
        setContacts(apiContacts);
    }
    function addContact(contact) {
        setContacts([contact, ...contacts]);
        // Single Responsibility Principle
        addContactToApi(contact);
    }

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
