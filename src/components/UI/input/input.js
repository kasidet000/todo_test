import React from 'react';

const Input = ({register, errors,label, id, ...inputProps}) => {
    return(
        <div className="form-group">
            <label className="title">{label}</label>
            <input className="form-control" 
                ref={register}
                id={id}
                {...inputProps} />
            {errors && <p className="text-danger">{errors.message}</p>}
        </div>
    );   
}

export default Input