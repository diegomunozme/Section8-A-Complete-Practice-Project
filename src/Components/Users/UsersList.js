import React from "react";
import classes from "./UsersList.module.css";

import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {/* users is an array of user objects, which 
      every object has a name and age property */}
        {props.users.map((user) => (
          <li>
            key={user.id}
            {user.name} ({user.name} years old){" "}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
