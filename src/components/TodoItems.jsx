import React from 'react'
import tick from '../assets/check.png'
import not_tick from '../assets/checkbox.png'
import deleteIcon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>   
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={tick} alt="" className='w-7'/>
            <p className='tex-slate-700 ml-4 text-[17px]'>
                {text}
            </p>
        </div>

        <img onClick={()=> {deleteTodo(id)}} src={deleteIcon} alt="" className='w-7 cursor-pointer'/>

    </div>
  )
}

export default TodoItems