import React, { useState } from 'react';
// import axios from 'axios';
import { navigate, Link } from '@reach/router';
// buttons
import Cancel from './CancelButton';
import Submit from './SubmitButton';
// axios
import axios from 'axios';
// FORM
export default props => {
    // set state
    const [name, setName] = useState("");
    // errors
    const [errors, setErrors] = useState([]);
    // form submission handler
    const submitHandler = e => {
        // prevent default
        e.preventDefault();
        const author = {name};
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res => {
                setName(res.data);
                navigate('/');
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errorArr =[];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // setErrors
                setErrors(errorArr);
            })
    }
    // style Link
    const styleA = {
        color: "white",
        textDecoration: "none"
    }
    // onClick
    const onClickHandler = e => {
        e.preventDefault();
        navigate('/');
    }
    // return
    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* error message: display or empty string, else...everything is okay */}
                {errors.map((err, i) => <p key={i}>{err}</p>)}
                <div>
                    <label>
                        Name
                    </label>
                    <input type="text" onChange= {e=> setName(e.target.value)}/>
                </div>
                <Submit type="submit">Submit</Submit>
            </form>
            <Cancel onClick={onClickHandler}>Cancel</Cancel>
        </div>
    );
}