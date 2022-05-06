import {useEffect, useState} from "react";
import {addContactToApi, getAllContacts} from "../ContactApiService";

export default function useContacts() {

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

    return [contacts, addContact];
}
