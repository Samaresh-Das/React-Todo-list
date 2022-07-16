import AddTask from "./Components/Tasks/AddTask";
import TaskList from "./Components/Tasks/TaskList";
import { useState } from "react";
import './App.css'

function App() {
  const [tasksList, setTaskList] = useState([]);

  const addTasksHandler = (title, details) => {
    setTaskList((prevTasksList) => {
      return [
        ...prevTasksList,
        {
          title: title,
          details: details,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className="app">
      <AddTask onAddTask={addTasksHandler}/>
      <TaskList tasks={tasksList} />
    </div>
  );
}

export default App;
