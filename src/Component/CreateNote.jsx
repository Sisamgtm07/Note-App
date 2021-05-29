import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{
    const [note, setNote] = useState({
        title : "",
        content : " ",
    });

    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setNote ((prevData) =>{
            return {
                ...prevData,
                [name] : value,

            };
        });
        console.log(note);
    };


    const addEvent = () =>{
            props.passNote(note);
            setNote({
            title : "",
            content : " ",
        })
    };
    return (
        <>
            <div className = "main_note">
                <form>
                    <input type = "text"  placeholder = "Title" name  = "title" value = {note.title} onChange = {inputEvent} autoComplete = "off" />
                    <textarea rows = "" column = ""  placeholder = "Write a note......" name = "content" value = {note.content} onChange = {inputEvent}></textarea>
                    <Button>
                        <AddIcon onClick = {addEvent} />
                    </Button>
                </form>
            </div> 
        </>
    )
}



export default CreateNote;