import React from "react";
import { useActions, action } from 'easy-peasy';


const UserItem = ({ user }) => {

const remove = useActions(actions => actions.remove)
 
  return (
    <div className = "user">
      <span style={{ cursor: "pointer" }}>
        {user.name}
      </span>
      <button onClick = {() => remove(user.id)}>
         delete
      </button>
    </div>
  );
};

export default UserItem;
