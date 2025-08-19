import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { tasks } from "../tasks";

function Form() {
  const { addTask, handleClickShowForm, isEditing, taskToEdit, editTask } =
    useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (isEditing == true) {
      setTitle(taskToEdit.title);
      setContent(taskToEdit.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [isEditing, taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing == false) {
      const newTask = {
        id: tasks.length,
        title: title,
        content: content,
      };
      addTask(newTask);
      setTitle("");
      setContent("");
      handleClickShowForm();
    } else {
      editTask({ ...taskToEdit, title, content });
      handleClickShowForm();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col m-2 gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-90 w-180 bg-white border-2 p-2 rounded-md"
    >
      <input
        type="text"
        value={title}
        placeholder="Titulo"
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 rounded-md p-1"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenido"
        className="border-2 rounded-md p-1 resize-none flex-1"
      ></textarea>
      <button className="cursor-pointer border-2 rounded-md hover:bg-gray-200">
        {isEditing ? "Editar" : "Guardar"}
      </button>
    </form>
  );
}

export default Form;
