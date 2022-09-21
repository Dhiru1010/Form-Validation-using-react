import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const AddUserList = props => {
    return (<Card classesName={classes.users}>
        <ul>
            {props.users.map((user =>
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>))}
        </ul>
    </Card>
    );
};
export default AddUserList;