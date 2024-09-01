import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../index.css'
import Dropdown from '../components/Dropdown'

function Introduce() {
  const difficulty=["easy","medium","hard"];
  const category={
    "Genel Kültür": 9,
    "Eğlence: Kitaplar": 10,
    "Eğlence: Film": 11,
    "Eğlence: Müzik": 12,
    "Eğlence: Televizyon": 14,
    "Eğlence: Video Oyunları": 15,
    "Bilim: Bilgisayarlar": 18,
    "Sports (Spor)": 21,
    "Geography (Coğrafya)": 22,
    "History (Tarih)": 23,
    "Celebrities (Ünlüler)": 26,
    "Animals (Hayvanlar)": 27
  };
  const [categoryChange,setcategoryChange]=useState("")

const [difficultyChange,setdifficultyChange]=useState("easy")
const TotalQuestion=10;
const navigate=useNavigate();
const startQuiz=()=>{
  navigate(`/quiz/${categoryChange}/${difficultyChange}/${TotalQuestion}`)
}

  return (
    <div className='w-full h-screen flex bg-gradient-to-r from-purple-500 to-pink-500 items-center justify-center'>
      <div className='max-w-[700px] w-full bg-white flex flex-col items-center justify-center p-6 border-solid border-2  rounded-xl'>
      <img className='w-96' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Bkx-bV8Y7oosGWM6rxIzAZdNyqNw1QaZKw&s' alt=''></img>
     <Dropdown difficulty={difficulty} setdifficultyChange={setdifficultyChange} category={category} setcategoryChange={setcategoryChange}/>
      <div onClick={startQuiz} className='w-[350px] h-[50] text-lg bg-pink-500 text-white border-solid border-2 flex items-center justify-center rounded-lg my-3 cursor-pointer'>
       Start Quiz</div>
      </div> 

  


    </div>
  )
}

export default Introduce
