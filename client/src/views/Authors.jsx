import React from 'react';
// table
import AuthorTable from '../components/AuthorTable';
// Link
import { Link } from '@reach/router';

export default () => {
    // return
    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/new'}>Add an author</Link>
            <AuthorTable/>
        </div>
    );
}