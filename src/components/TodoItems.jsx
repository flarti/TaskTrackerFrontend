import React from 'react'
import tick from '../assets/check.png'
import not_tick from '../assets/checkbox.png'
import deleteIcon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div onClick={()=>{toggle(id)}} className='flex items-center my-3 gap-2'>   
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
            <p className={`tex-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
                {text}
            </p>
        </div>

        <img onClick={()=> {deleteTodo(id)}} src={deleteIcon} alt="" className='w-7 cursor-pointer'/>

    </div>
  )
}

export default TodoItems