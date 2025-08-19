import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { tasks } from "../tasks";

function Form() {
  const { addTask, handleClickShowForm } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length,
      title: title,
      content: content,
    };
    addTask(newTask);
    setTitle("");
    setContent("");
    handleClickShowForm()
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-2 gap-2">
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
        className="border-2 rounded-md p-1"
      ></textarea>
      <button className="cursor-pointer border-2 rounded-md">Guardar</button>
    </form>
  );
}

export default Form;
