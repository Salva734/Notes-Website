import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import DropdownMenu from "./DropdownMenu";

function TaskCard() {
  const { tasks, deleteTask, handleClickShowForm } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="m-2">No hay tareas</h1>;
  }

  return (
    <div className="m-2 gap-2 flex">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border-2 h-50 w-48 p-2 rounded-md relative"
        >
          <DropdownMenu
            task={task}
            deleteTask={deleteTask}
            handleClickShowForm={handleClickShowForm}
          />
          <h4 className="font-bold text-xl">{task.title}</h4>
          <p>{task.content}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskCard;
