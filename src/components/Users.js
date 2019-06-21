import React, { Fragment, useEffect } from "react";
import UserItem from "./UserItem";
import { useStore , useActions } from 'easy-peasy';

const Users = () => {


    const users = useStore(state => state.users)
    const fetchUsers = useActions(actions => actions.fetchUsers)

    useEffect(() => {
       fetchUsers();
        // eslint-disable-next-line
    } , []);

  return (
    <Fragment>
      <center> <h1>Users</h1> </center>
      {users.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
    </Fragment>
  );
};

export default Users;
