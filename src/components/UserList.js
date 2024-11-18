import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/userSlice";

const UserList = ({ setEditingUser }) => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>User List</h2>
            {users.length === 0 && <p>No users available!</p>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <button onClick={() => setEditingUser(user)}>Edit</button>
                        <button onClick={() => dispatch(deleteUser(user.id))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
