import React, { useState } from "react";
import Card from "../UI/Card";
import ErroModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'
const AddUsers = (props) => {
    const [enterdUser, setUserName] = useState('');
    const [enterdage, setUserage] = useState('');
    const [error, seterror] = useState();

    const usernamechangeHandler = event => {
        setUserName(event.target.value);
    }
    const useragechangeHandler = event => {
        setUserage(event.target.value);
    }
    const onFormSubmit = event => {
        event.preventDefault();
        if (enterdUser.trim().length === 0 || enterdage <= 0
            || enterdage.trim().length === 0) {
            seterror({
                title: "Invalid Age",
                message: "Please enter a valid name and age"
            });

            return;
        }
        props.onAddUser(enterdUser, enterdage);
        setUserName('');
        setUserage('');
    }

    const errorHandler = () => {
        seterror(null);
    }
    return (
        <div>
            {error && <ErroModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={onFormSubmit}>
                    <label htmlFor="username">Your Name</label>
                    <input id="username" type="text" value={enterdUser} onChange={usernamechangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enterdage} onChange={useragechangeHandler} />
                    <button type="submit">Submit</button>
                </form>
            </Card>

        </div >
    );
}

export default AddUsers;