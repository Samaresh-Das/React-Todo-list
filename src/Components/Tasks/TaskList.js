import classes from "./TaskList.module.css";
import Card from "../UI/Card";

const TaskList = props => {
  return (
    <Card className={classes.task}>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            Task :- {task.title} <br /> Details :- {task.details}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaskList;
