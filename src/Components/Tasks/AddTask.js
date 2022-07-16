import classes from "./AddTask.module.css";
import Card from "../UI/Card";
import { useState, Fragment } from "react";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState()

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (title.trim().length === 0 || details.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "The Task title cannot be empty"
      });
      return;
    }
    props.onAddTask(title, details)
    setTitle('')
    setDetails('')
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const detailsChangeHandler = (event) => {
    setDetails(event.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onDismiss={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addTaskHandler}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            value={title}
          />
          <label htmlFor="details">Task Details</label>
          <input
            type="text"
            id="details"
            onChange={detailsChangeHandler}
            value={details}
          />
        <Button type="submit">Add Task</Button>
        </form>
      </Card>
      </Fragment>
  );
};

export default AddTask;
