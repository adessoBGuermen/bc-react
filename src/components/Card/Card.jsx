import PropTypes from 'prop-types';
import styles from './Card.module.css'; // gibt .tile als Card_tile__CR1lU aus und greift deshalb nicht mit ${styles.tile}

export default function Card( {heading, text, list} ) {

    const output = text ?
        <p className="mb-0"> {text} </p> :
        <ul> {list.map((item)=> { return <li key={item}>{item}</li> })} </ul>;
    return (
        <div className={`p-3 mb-3 bg-white border border-secondary rounded-3
            animate__animated animate__backInRight ${styles.tile}`}>
            <h2>{heading}</h2>
            {output}
        </div>
    )
}


Card.propTypes = {
	heading: PropTypes.string.isRequired,
	text: PropTypes.string,
    list: PropTypes.array,
}
