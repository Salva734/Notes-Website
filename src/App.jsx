import TaskCard from './components/TaskCard'
import Form from "./components/Form";
import Header from './components/Header'
import './App.css'
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function App() {

  const { show } = useContext(TaskContext);

  return (
    <>
    <Header/>
    <TaskCard/>
    {show && <Form/>}
    </>

  )
}

export default App
