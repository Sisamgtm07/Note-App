import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note = (props) => {
    
    const deleteNote = () =>{
        props.deleteItem(props.id);
    }

    return(
        <>
            <div className = "note">
                <h1>{props.title}</h1>
                <p contenteditable="true">{props.content}</p>
                <button onClick = {deleteNote}>
                    <DeleteOutlineIcon />
                </button>
            </div>
        </>
    )
}

export default Note;