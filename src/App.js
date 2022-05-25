import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList,setUsersList] = useState([])

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return[...prevUsersList, 
        {
          name:userName, 
          age:userAge,
          id: Math.random.toString()}];
    });
  }
  return (
    <div>
      {/*
      NOTES: 
        AddUsers contains state and input functionality for client side rendering
        UsersList displays the list of user objects whos attributes been inputted in AddUser*/}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
