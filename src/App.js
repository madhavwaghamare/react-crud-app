import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD App</h1>
      {editingUser ? (<EditUser editingUser={editingUser} setEditingUser={setEditingUser} />) : (<AddUser />)}
      <UserList setEditingUser={setEditingUser} />
    </div>
  );
};

export default App;
