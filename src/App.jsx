import { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem';
import TodoDetails from './components/TodoDetails';


function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false)

  const fetchTodoList = async () => {
        try {
      setLoading(true)
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      
      if(result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos)
        setLoading(false)
      } else {
        setTodoList([]);
        setErrorMsg('')
        setLoading(false)
      }

    } catch (error) {
      setLoading(false)
      setErrorMsg(`${error}`)
    }
  }

  const fetchTodoListDetails = async (todoId) => {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${todoId}`)
      const details  = await apiResponse.json()
      if(details) {
        setTodoDetails(details);
        setOpenDialog(true)
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.error('Error fetching todo details:', error);
    }
  }

  
  useEffect(() => {
    fetchTodoList();
  }, [])

   return (
    <>
      <div className='bg-bgBlue'>
        <div className='container h-screen flex justify-center items-center'>
          <div className='flex flex-col w-full max-h-[500px] items-center justify-center'>
            <h1 className='text-center text-3xl font-worksans font-semibold text-gray-200'>Simple TODO App</h1>
            <div className='p-4 rounded-md m-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 min-w-[60px] md:w-[800px] overflow-x-scroll scrollbar-custom overflow-y-scroll bg-white'>
              {
                loading && (
                  <p className='font-lobster text-gray-400 font-medium text-3xl text-center items-center'>Fetching...</p>
                )
              } 
              {
                !loading && todoList && todoList.length > 0 ? 
                todoList.map((todoItem) => (<TodoItem fetchTodoListDetails={fetchTodoListDetails} todo={todoItem}/>)) : null
              }
            </div>
          </div>
        </div>
        {
          openDialog  && (
            <TodoDetails 
              openDialog={openDialog}
              todoDetails={todoDetails}
              setOpenDialog={setOpenDialog}
              setTodoDetails={setTodoDetails}
            />
        )}
        
      </div>
      
    </>
  )
}

export default App
