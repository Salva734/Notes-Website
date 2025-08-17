import {useState} from 'react'

function Header() {

const [isHidden, setIsHidden] = useState(true);

function handleClick(){
  if(isHidden === false){
    setIsHidden(true)
  }
  else{
    setIsHidden(false)
  }
  console.log(isHidden)
}

  return (
    <header className="flex justify-between">
        <h1 className='font-bold text-4xl m-2'>Notas</h1>
        <button onClick={handleClick} className="border-2 rounded-md m-2 p-2">+ Nueva nota</button>
    </header>
  )
}

export default Header
