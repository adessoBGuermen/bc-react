//import styles from './CardContainer.module.css';
//import Card from '../Card/Card';
import PropTypes from "prop-types";
import styles from "../Card/Card.module.css";
import Card from "../Card/Card";
import {useState} from "react";

export default function FormContainer( {heading, sendDataOnSubmit, contacts} ) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [formText, setFormText] = useState('');

    function onNameChange(event) {
        setName(event.target.value);
    }
    function onEmailChange(event) {
        setEmail(event.target.value);
    }
    function onSubjectChange(event) {
        setSubject(event.target.value);
    }
    function onFormTextChange(event) {
        setFormText(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        sendDataOnSubmit({
            name: name,
            email: email,
            subject: subject,
            formText: formText,
        });
    }

    return (
        <>
            <section className="container pt-4 pb-5">
                <div className="row">
                    <div className={`p-3 mb-3 bg-white border border-secondary rounded-3
                animate__animated animate__backInRight ${styles.formTile} ${styles.tile}`}>
                        <h2>{heading}</h2>

                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="inputName"
                                    value={name}
                                    onChange={onNameChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email address</label>
                                <input type="email"
                                       className="form-control"
                                       id="inputEmail"
                                       value={email}
                                       onChange={onEmailChange}
                                       aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputSubject" className="form-label">Betreff</label>
                                <input type="text"
                                       className="form-control"
                                       id="inputSubject"
                                       value={subject}
                                       onChange={onSubjectChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputText" className="form-label">Text</label>
                                <textarea
                                    className="form-control"
                                    id="inputText"
                                    rows="3"
                                    value={formText}
                                    onChange={onFormTextChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Do Magic!</button>
                        </form>
                    </div>

                    <div className={`p-3 mb-3 bg-white border border-secondary rounded-3
                animate__animated animate__backInRight ${styles.formTile} ${styles.tile}`}>
                        <h2>Datenbank</h2>
                        <ul>
                            {contacts.map((contact) => (
                                <li>
                                    <strong>{contact.name}</strong> ({contact.email}): {contact.subject} - {contact.formText}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

Card.propTypes = {
    heading: PropTypes.string.isRequired,
}
