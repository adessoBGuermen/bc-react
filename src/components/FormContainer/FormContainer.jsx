import {FormCard, DbCard} from "../Card/Card";

export default function FormContainer( {sendDataOnSubmit, contacts} ) {

    return (
        <section className="container mb-4">
            <div className="row">
                <FormCard heading="Form"
                          sendDataOnSubmit={sendDataOnSubmit}/>
                <DbCard heading="Datenbank"
                        contacts={contacts}/>
            </div>
        </section>
    )
}
