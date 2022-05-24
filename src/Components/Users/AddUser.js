import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlfor="username">Username</label>
        <input id="username" type="text" />
        <label htmlfor="age">Age</label>
        <input id="age" type="Number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
