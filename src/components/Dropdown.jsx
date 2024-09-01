import React from 'react'

function Dropdown({difficulty,setdifficultyChange}) {
  return (
    <div>
<select name="difficulty"  className='border-solid border-2 rounded-lg w-[350px] h-[50px]' onChange={((e)=>setdifficultyChange(e.target.value))}>
{
  difficulty.map((value,index)=><option key={index} >{value}</option>)
}
</select>

      
    </div>
  )
}

export default Dropdown
