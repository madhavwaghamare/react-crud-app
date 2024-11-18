import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const handleAddUser = () => {
        if (name && email) {
            dispatch(addUser({ id: uuidv4(), name, email }));
            setName("");
            setEmail("");
        }
    };

    return (
        <div>
            <h2>Add User</h2>
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
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );
};

export default AddUser;
