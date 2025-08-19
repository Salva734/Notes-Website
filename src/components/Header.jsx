import {useContext} from 'react'
import Form from './Form'
import { TaskContext } from "../context/TaskContext";

function Header() {
  
  const { handleClickShowForm, show } = useContext(TaskContext);

  return (
    <>
    <header className="flex justify-between">
        <h1 className='font-bold text-4xl m-2'>Notas</h1>
        <button onClick={handleClickShowForm} className="border-2 rounded-md m-2 p-2">+ Nueva nota</button>
    </header>
    {show && <Form/>}
    </>
    
  )
}

export default Header
