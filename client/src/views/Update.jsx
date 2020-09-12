import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
// Form
// import Form from '../components/Form'; 
// buttons
import Cancel from '../components/CancelButton';
import Submit from '../components/SubmitButton';
// import DeleteButton from '../components/DeleteButton';



export default props => { 
    const [name, setName] = useState("");
    // errors
    const [errors, setErrors] = useState({});
    // useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res=> {
                setName(res.data.name);
            }).catch(err => console.log(err));
    },[props._id])
    // update
    const update = e => {
        e.preventDefault();
        const author = {name}
        axios.put(`http://localhost:8000/api/authors/update/${props._id}`, author)
        .then(res=> {
            console.log(res);
            if(res.data.errors) {
                setErrors(res.data.errors);
            } else {
                navigate('/');
            }
        })
    }
    // onClick
    const onClickHandler = e => {
        e.preventDefault();
        navigate('/');
    }
    // return
    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/'}>Home</Link>
            <h3>Edit this author</h3>
            <form onSubmit={update}>
            {/* error message: display or empty string , else...everything is okay */}
            <p>{errors.name ? errors.name.message : ""}</p>
                <label>
                    Name:
                </label>
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                <Submit type="submit" >Submit</Submit>
            </form>
            <Cancel onCLick={onClickHandler}>Cancel</Cancel>
        </div>
    );
}