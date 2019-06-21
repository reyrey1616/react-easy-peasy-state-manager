import React, { useState } from "react";
import { useActions } from 'easy-peasy';

const AddUser = () => {

    const [name , setName] = useState('')
    const add = useActions(actions => actions.add);


  return (
    <div>
      <form onSubmit = {(e) => {
          e.preventDefault();
            if(name == '') {
              alert('Insert User Fullname!');
            }
            else {
              add({  name });
              setName('');
            }
      }}>

        <input
          type="text"
          value={name}
          onChange = {e => setName(e.target.value)}
          placeholder="Add User Fullname..."
        />
        <center>
        <input type="submit" value="Add User" />
        </center>
      </form>
    </div>
    
  );
};

export default AddUser;
