import PropTypes from "prop-types";

export default function FormInputWithLabel( {labelText, inputType, inputId, inputValue, inputOnChange} ) {

    return (
        <>
            <div className="mb-3">
                <label htmlFor={inputId}
                       className="form-label">
                    {labelText}
                </label>
                { inputType === "textarea" ?
                    <textarea className="form-control"
                        id={inputId}
                        rows="3"
                        value={inputValue}
                        onChange={inputOnChange}></textarea> :
                    <input type={inputType}
                        className="form-control"
                        id={inputId}
                        value={inputValue}
                        onChange={inputOnChange}/>
                }
            </div>
        </>
    )
}

FormInputWithLabel.propTypes = {
    labelText: PropTypes.string,
    inputType: PropTypes.string,
    inputId: PropTypes.string,
    inputValue: PropTypes.string,
}