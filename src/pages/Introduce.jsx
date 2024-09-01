import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../index.css'
import Dropdown from '../components/Dropdown'

function Introduce() {
  const difficulty=["easy","medium","hard"];
  const [difficultyChange,setdifficultyChange]=useState("")
const TotalQuestion=10;
const navigate=useNavigate();
const startQuiz=()=>{
  navigate(`/quiz/${difficultyChange}/${TotalQuestion}`)
}

  return (
    <div className='w-full h-screen flex bg-gradient-to-r from-purple-500 to-pink-500 items-center justify-center'>
      <div className='max-w-[700px] w-full bg-white flex flex-col items-center justify-center p-6 border-solid border-2  rounded-xl'>
      <img className='w-96' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Bkx-bV8Y7oosGWM6rxIzAZdNyqNw1QaZKw&s' alt=''></img>
     <Dropdown difficulty={difficulty} setdifficultyChange={setdifficultyChange}/>
      <div onClick={startQuiz} className='w-[350px] h-[50] text-lg bg-pink-500 text-white border-solid border-2 flex items-center justify-center rounded-lg my-3 cursor-pointer'>Quiz e Başla</div>

     
      </div> 

  


    </div>
  )
}

export default Introduce
