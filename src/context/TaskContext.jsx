import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const [show, setShow] = useState(false);

  function handleClickShowForm() {
    if (show === false) {
      setShow(true);
    } else setShow(false);
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, handleClickShowForm, show }}>
      {props.children}
    </TaskContext.Provider>
  );
}
