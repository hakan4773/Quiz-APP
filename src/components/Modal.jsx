import React from 'react'

function Modal({score,trueanswer}) { //Hata veriyor trueanswer
  return (
    <div className='text-center'>
    <div className='text-2xl text-white'>Score: {score}</div>


    <div> {/* Cevapları listeleme */}
    {trueanswer.length === 0 ? (
    <div className="text-white">Henüz cevaplanmış bir soru yok.</div>):
    (
    
    <ul className='bg-white  text-start p-5'>
          {trueanswer.map((answer, index) => (
            <li key={index} className="text-black">
              <span className='text-black font-semibold'>Soru: </span> {answer.question}
       <br></br>
              <span className='text-red-500 font-semibold '>Cevabınız: </span> {answer.selectedAnswer} - {answer.isCorrect ?   
               <span className='text-green-700 font-bold '>Doğru</span> : <span className='text-red-600 font-bold '>Yanlış</span>}
              <hr></hr>
            </li>
          
          ))}
        </ul>
) }
<div onClick={()=>window.location="/"} className='w-[350px] h-[50] text-lg bg-pink-500 text-white border-solid border-2 flex items-center justify-center rounded-lg my-3 cursor-pointer mx-auto hover:bg-pink-300'>
      Yeniden Başla
    </div>
    </div>


    
    </div>
  )
}

export default Modal
