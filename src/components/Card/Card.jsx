import PropTypes from 'prop-types';
import styles from './Card.module.css'; // gibt .tile als Card_tile__CR1lU aus und greift deshalb nicht mit ${styles.tile}
import FormInputWithLabel from "../FormInputWithLabel/FormInputWithLabel";
import {useState} from "react";

export default function Card( {heading, text, list} ) {

    const output = text ?
        <p className="mb-0"> {text} </p> :
            <ul className={`px-0 list-group-flush`}>
                {list.map((item) => { return <li key={item} className={`list-group-item`}>{item}</li> })}
            </ul>;
    return (
        <>
            <div className={`p-3 mb-3 bg-white border border-secondary rounded-3
                animate__animated animate__backInRight ${styles.tile}`}>
                <h2>{heading}</h2>
                {output}
            </div>
        </>
    )
}

Card.propTypes = {
	heading: PropTypes.string.isRequired,
	text: PropTypes.string,
    list: PropTypes.array,
}

export function FormCard( {heading, sendDataOnSubmit} ) {
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
        <div className={`p-3 mb-3 bg-white border border-secondary 
            rounded-3 ${styles.formTile} ${styles.tile}`}>
            <h2>{heading}</h2>
            <form onSubmit={onSubmit}>
                <FormInputWithLabel
                    labelText="Name"
                    inputType="text"
                    inputId="inputName"
                    inputValue={name}
                    inputOnChange={onNameChange}/>
                <FormInputWithLabel
                    labelText="E-Mail-Adresse"
                    inputType="email"
                    inputId="inputEmail"
                    inputValue={email}
                    inputOnChange={onEmailChange}/>
                <FormInputWithLabel
                    labelText="Betreff"
                    inputType="text"
                    inputId="inputSubject"
                    inputValue={subject}
                    inputOnChange={onSubjectChange}/>
                <FormInputWithLabel
                    labelText="Text"
                    inputType="textarea"
                    inputId="inputText"
                    inputValue={formText}
                    inputOnChange={onFormTextChange}/>
                <button type="submit"
                        className="btn btn-primary">
                    Do Magic!
                </button>
            </form>
        </div>
    )
}

export function DbCard( {heading, contacts} ) {

    return (
        <>
            <div className={`p-3 mb-3 bg-white border border-secondary rounded-3
                    animate__animated animate__backInRight ${styles.formTile} ${styles.tile}`}>
                <h2>{heading}</h2>
                <ul>
                    {contacts.map((contact) => (
                        <li>
                            <strong>{contact.name}</strong> ({contact.email}): {contact.subject} - {contact.formText}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}