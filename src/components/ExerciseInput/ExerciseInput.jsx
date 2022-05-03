import PropTypes from "prop-types";

export default function ExerciseInput( {name, type, value, onChange} ) {


    return(
        <>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}/>
        </>
    )
}

ExerciseInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}