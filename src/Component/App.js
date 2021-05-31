import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
function App() {

  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem ((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) =>{
      setAddItem((oldData) =>
      oldData.filter((currData,indx) =>{
          return indx !== id;
      })    
      )
  };
  return (
    <>
        <Header />
        <CreateNote passNote = {addNote} />
        {
          addItem.map((val,index) => {
              return <Note
                            key = {index}
                            id = {index}
                            title = {val.title}
                            content = {val.content}
                            deleteItem = {onDelete}
                  />
        })
        }
        
    </>
  );
}

export default App;
