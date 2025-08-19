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
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState();

  function editTask(updatedTask){
    setTasks(tasks.map((task)=> task.id === updatedTask.id ? updatedTask : task))
  }

  function handleClickShowForm() {
    if (show === false) {
      setShow(true);
    } else setShow(false);
    setIsEditing(false);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        handleClickShowForm,
        show,
        isEditing,
        setIsEditing,
        taskToEdit,
        setTaskToEdit,
        editTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
