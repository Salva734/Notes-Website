import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function DropdownMenu({ task, deleteTask, handleClickShowForm }) {
  const { isEditing, setIsEditing, setTaskToEdit } = useContext(TaskContext);

  function handleEdit() {
    handleClickShowForm();
    if (isEditing == false) {
      setIsEditing(true);
      setTaskToEdit(task);
    }
  }

  return (
    <div className="absolute right-0 top-0 m-2 cursor-pointer group">
      <BsThreeDotsVertical />
      <ul className="hidden group-hover:block bg-white border rounded shadow-md">
        <li
          className="cursor-pointer p-2 hover:bg-gray-200 rounded-t"
          onClick={() => deleteTask(task.id)}
        >
          eliminar
        </li>
        <li
          className="cursor-pointer p-2 hover:bg-gray-200 rounded-b"
          onClick={handleEdit}
        >
          editar
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
