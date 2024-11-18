import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/userSlice";

const EditUser = ({ editingUser, setEditingUser }) => {
    const [name, setName] = useState(editingUser.name);
    const [email, setEmail] = useState(editingUser.email);
    const dispatch = useDispatch();

    const handleUpdateUser = () => {
        dispatch(updateUser({ id: editingUser.id, name, email }));
        setEditingUser(null);
    };

    return (
        <div>
            <h2>Edit User</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleUpdateUser}>Update User</button>
            <button onClick={() => setEditingUser(null)}>Cancel</button>
        </div>
    );
};

export default EditUser;
