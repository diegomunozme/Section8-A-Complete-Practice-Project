import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // We want to add checks in our code for age and name (not empty and x>1)
    if (
      (enteredUsername.trim().length === 0) |
      (enteredAge.trim().length === 0)
    ) {
      return;
    }
    //Adding a plus before enteredAge ensures that it will always be a int data type
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="An Error Occured!" messasge="Something Went Wrong!" />
      <Card className={classes.input}>
        {/* Add user handler ensures we're running on client-side*/}
        <form onSubmit={addUserHandler}>
          <label htmlfor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlfor="age">Age</label>
          <input
            id="age"
            type="Number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
