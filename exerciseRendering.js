import { useState } from 'react';
import ExerciseInput from "./src/components/ExerciseInput/ExerciseInput";

export default function ContactForm({ sendDataOnSubmit }) {
    console.log('ContactForm :: start');

    const [formData, setFormData] = useState({
        name: null,
        email: null,
    });

    function onInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        console.log('ContactForm :: onNameChange :: setEmail / STATE');
    }

    function onSubmit(event) {
        event.preventDefault();

        console.log('ContactForm :: sendDataOnSubmit :: PRE');
        sendDataOnSubmit(formData);
        console.log('ContactForm :: sendDataOnSubmit :: POST');
    }

    console.log('ContactForm :: JSX');

    return (
        <form onSubmit={onSubmit}>
            <p>
                STATE <strong>Name</strong>
                {formData.name} <strong>Email</strong>
                {formData.email}
            </p>
            <ExerciseInput
                type="text"
                name="name"
                value={formData.name}
                onChange={onInputChange}/>
            <ExerciseInput
                type="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}/>
            <button>Submit</button>
        </form>
    );
}