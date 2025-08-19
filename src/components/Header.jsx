import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Header() {
  const { handleClickShowForm, setIsEditing } = useContext(TaskContext);

  function handleAddButton() {
    handleClickShowForm();
    setIsEditing(false);
  }

  return (
    <header className="flex justify-between">
      <h1 className="font-bold text-4xl m-2">Notas</h1>
      <button
        onClick={handleAddButton}
        className="border-2 rounded-md m-2 p-2 cursor-pointer hover:bg-gray-200"
      >
        + Nueva nota
      </button>
    </header>
  );
}

export default Header;
