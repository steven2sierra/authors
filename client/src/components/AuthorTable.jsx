import React, { useState, useEffect } from 'react';
// Link
import { Link } from '@reach/router';
// import DeleteButton
import DeleteButton from './DeleteButton';
// axios
import axios from 'axios';

export default props => {
    const [name, setName] = useState([]);
    // remove from DOM
    const removeFromDom = ID => {
        setName(name.filter(author => author._id !== ID))
    }
    // style EDIT
    const styleEdit = {
        color: "white",
        outline:"none",
        borderRadius: "10px",
        width: "90px",
        height: "45px",
        backgroundColor: "#009E0F",
    }
    const styleA = {
        color: "black",
        textDecoration: "none"
    }
    // useEffect get from api
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setName(res.data))
            .catch(err => console.log(err));
    })
    // return
    return(
        <div>
            <div>
                <h3>We have quotes by:</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                    {/* map */}
                    {name.map((n, i) => {
                    return(
                        <tbody key={i}>
                        <tr>
                            <td>
                                {/* Name */}
                                <p>{n.name}</p>
                            </td>
                            <td>
                            {/* Actions */}
                            <button style={styleEdit}>
                                <Link style={styleA} to={`/edit/${n._id}`}>Edit</Link>
                            </button>
                            <DeleteButton ID ={n._id} callBack={() => removeFromDom(n._id)}/>
                            </td>
                        </tr>
                        </tbody>
                        );
                    })}
                    </table>
            </div>
        </div>
    );
}