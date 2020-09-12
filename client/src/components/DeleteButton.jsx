import React from 'react';
import axios from 'axios';

export default props => {
    // retrieve ID for callback
    const {ID, callBack} = props;
    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/authors/delete/${ID}`)
            .then(res => {
                callBack();
            })
    }
    // style Delete
    const styleDelete ={
        color: "black",
        outline:"none",
        borderRadius: "10px",
        width: "90px",
        height: "45px",
        paddingLeft: "5px",
        paddinRight: "5px",
        backgroundColor: "#FFFF00",
        textDecoration: "none"
    }
    // return
    return(
        <button style={styleDelete} onClick={deleteAuthor}>
            Delete
        </button>
    );
}