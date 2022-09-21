import React, { useState } from 'react';
import './App.css';
import AddUsers from "./Component/AddUsers/AddUsers";
import UserList from './Component/AddUsers/AddUserList'
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }]
    })
  }
  return (
    <div className="App">
      <h1>Hello Welcome my app</h1>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
