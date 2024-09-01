import React,{useEffect, useState} from 'react'

function QuestionsCard({questions,count,setCount,score,setScore,modal,setModal,loading,error,trueanswer,setTrueanswer}) {
    const selectanswers=["A","B","C","D"]
   const [timer,setTimer]=useState(30)
 
    useEffect(()=>{
const interval= setInterval(()=>{
    if(timer > 0 ){
        setTimer(timer -1)
    }
  },1000)

  if(timer==0 && count <10){
    setCount(count +1)
    setTimer(30)
  }
  else if(count>=10){setModal(true)}
  return ()=>{clearInterval(interval)} 

   },[timer])

 const  ApprovedChoice=(e)=>  //Doğru cevabı kontrol etme
{
const selectedAnswer=e.currentTarget.value;
const isCorrectAnswer =e.currentTarget.value==questions[count]?.correct_answer
setTrueanswer([...trueanswer, { question: questions[count].question, selectedAnswer, isCorrect: isCorrectAnswer }]);  //CEVAP LİSTESİ

if(isCorrectAnswer)
{
setScore(score +100)
}
}

const NextQuestion=()=>{
    if (count === 9){
        setModal(true);
      } 
setCount(count +1)
setTimer(30)
}

    return (
    <div className='w-full max-w-[700px]'>
        <div className='w-12 h-12 text-2xl bg-black text-white border-[1px] rounded-full flex items-center justify-center text-center'>{timer}</div>
      <div className='text-xl font-semibold text-white'>
         {count}/10 - {questions[count].question}
         </div>

<div className='m-6'>
{
   questions[count].answers.map((answer,i)=>
   <button onClick={ApprovedChoice}
   value={answer}
    className="w-80  border-solid border-[1px] rounded-lg bg-white p-1 mx-2 my-4 flex flex-col hover:bg-gray-300 focus:bg-green-500 focus:text-white active:bg-green-700 cursor-pointer" 
   key={i}>{ selectanswers[i]+") "+answer}
   </button>) 
}
</div>

<button className='bg-blue-500 text-white border-solid border-2 rounded-lg p-2 flex m-6 text-center items-center text-xl hover:bg-blue-300' 
onClick={NextQuestion}>Next question</button>


    </div>
  )
}

export default QuestionsCard
