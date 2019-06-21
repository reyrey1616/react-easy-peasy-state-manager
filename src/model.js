import { action , thunk} from 'easy-peasy'; 
import uuid from 'uuid';


// A container of data/state and actions/functions 

export default {
    users: [] ,
    // THUNKS

    fetchUsers: thunk(async actions => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
        const users = await res.json();
        actions.setUsers(users);
    })
,
    // Actions
    setUsers: action((state , users) => {
        state.users = users;
    }),
    remove: action((state , id) => {
        state.users = state.users.filter(user => user.id !== id);
    }) ,
    add: action((state , user) => {
        user.id = uuid.v4();
        state.users = [...state.users , user];
    })
};