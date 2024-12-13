import React from 'react'

function TodoItem({todo, fetchTodoListDetails}) {
  return (
    <ul className=' flex font-jost bg-slate-200 w-full rounded-sm hover:shadow-lg hover:scale-105 transition cursor-pointer shadow-md'>
        <li className='h-full justify-between gap-2 flex flex-col p-4 items-start'>
            {
                todo?.todo
            }
            <button
                onClick={() => fetchTodoListDetails(todo?.id)}
                className='bg-slate-700 px-3 py-1 rounded-md text-yellow-50 hover:bg-slate-900'
            >
                Details
            </button>
        </li>
    </ul>
  )
}

export default TodoItem