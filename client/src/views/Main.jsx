import React from "react";
// import axios from 'axios';
import { Link } from '@reach/router';
import Form from '../components/Form';

export default props => {
    // return
    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/'}>Home</Link>
            <h3>Add a new author:</h3>
            <Form/>
        </div>
    );
}