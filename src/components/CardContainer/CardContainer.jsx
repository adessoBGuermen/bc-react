//import styles from './CardContainer.module.css';
import Card from '../Card/Card';
import PropTypes from "prop-types";

export default function CardContainer( {skills, interests} ) {

    return (
        <section className="container pt-4 pb-5">
            <div className="row">
                <Card
                    heading="Biografie"
                    text="Lorem"
                />
                <Card
                    heading="Kenntnisse"
                    list={skills}
                />
                <Card
                    heading="Interessen"
                    list={interests}
                />

            </div>
        </section>
    )
}

CardContainer.propTypes = {
    skills: PropTypes.array,
    interests: PropTypes.array,
}