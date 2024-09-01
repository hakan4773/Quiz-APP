import React from 'react'

function Dropdown({difficulty,setdifficultyChange,category,setcategoryChange}) {

  return (
    <div>
      {/* Kategori Seçimi için */}

      <div> <select onChange={(e) => setcategoryChange(e.target.value)}
 className='border-solid border-2 rounded-lg w-[350px] h-[50px] my-3'>
<option>Select Category</option>
        {Object.entries(category).map(([name, id]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
</select> </div>


<div>
    {/* Zorluk Seviyesi Seçimi için */}
<select name="difficulty"  
className='border-solid border-2 rounded-lg w-[350px] h-[50px]' 
onChange={((e)=>setdifficultyChange(e.target.value))}>
{
  difficulty.map((value,index)=><option key={index} >{value}</option>)
}
</select>

</div>

  
    </div>
  )
}

export default Dropdown
