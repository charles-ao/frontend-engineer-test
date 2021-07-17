const  InputField = (props) => {
    const {title, state, stateFunction, type, errorState} = props
    
    return (
        <div className='input-field'>
            <h4>{title} &#42;</h4>
            <input type={type} value={state} onChange={stateFunction} />
            <div className='error-text'>{errorState}</div>
        </div>
    )
}

export default InputField