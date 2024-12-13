import React from 'react'

function TodoDetails({todoDetails, openDialog, setOpenDialog, setTodoDetails}) {
    if (!openDialog) return null;
  return (
    <>
        <div className='flex h-screen fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60 z- items-center justify-center'>
            <div className='bg-white relative text-center p-6 rounded-sm'>
                {todoDetails?.todo}
                <div className='absolute -top-3 -right-2'>
                    <button
                        onClick={() => {
                            setOpenDialog(false)
                            setTodoDetails(null)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 128"
                            className="w-6 h-6"
                            >
                            <circle cx="64" cy="64" r="64" fill="#c93636" />
                            <path
                                d="m100.3,90.4l-26.4-26.4,26.3-26.4c.4-.4.4-1,0-1.4l-8.5-8.5c-.4-.4-1-.4-1.4,0l-26.3,26.4-26.3-26.3c-.4-.4-1-.4-1.4,0l-8.5,8.5c-.4.4-.4,1,0,1.4l26.2,26.3-26.3,26.3c-.4.4-.4,1,0,1.4l8.5,8.5c.4.4,1.1.4,1.4,0l26.4-26.3,26.3,26.3c.4.4,1.1.4,1.5.1l8.5-8.5c.4-.4.4-1,0-1.4Z"
                                fill="#fff"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default TodoDetails