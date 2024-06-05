'use client'
import Image from 'next/image';

const task = {id: 1, text: "Todo Test", completed: false}

export default function Home() {
  const tasks = []; // rewrite using states
  const filter = 'all'; // rewrite using states

  const handleAddTask = () => {
    // Implement add task logic here
  };

  const handleToggleTask = () => {
      // Implement toggle completed/uncompleted task logic here
  };

  const handleDeleteTask = () => {
      // Implement delete task logic here

  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">TODO</h1>
        
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          className="bg-gray-800 text-white border-none rounded p-4 flex-grow"
          placeholder="What to do ?"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-4 rounded ml-4"
        >
          Add Task
        </button>
      </div>
      <div className="bg-gray-800 rounded p-4">
        {/* Medium level: extract todo's listing to TaskList component */}
        {/* Basic level: map through tasks state by using this code: */}
        <ul>
          <li className="flex justify-between items-center p-2 bg-gray-900 rounded mb-2">
            <div className="flex items-center">
              <button 
              className="w-6 h-6 my-auto mr-6"
              onClick={() => alert("Toggle the task status")} 
              >
                <Image
                      src={task.completed ? "/images/circle-cheked.svg" : "/images/circle.svg"}
                      alt="Task status"
                      width={30}
                      height={30}
                />
              </button>
              <span className={`ml-2 ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>{task.text}</span>
            </div>
            <button onClick={() => alert("Delete task")} className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        </ul>
        <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
          <span> 'n' items left</span>  {/* show how many uncompleted items left */}
          <div>
            <button onClick={() => alert("Show all")} className={`mr-2 ${filter === 'all' ? 'text-white' : ''}`}>All</button>
            <button onClick={() => alert("Show active")} className={`mr-2 ${filter === 'active' ? 'text-white' : ''}`}>Active</button>
            <button onClick={() => alert("Show completed")} className={`${filter === 'completed' ? 'text-white' : ''}`}>Completed</button>
          </div>
          <button
            onClick={() => alert("Clear completed tasks")}
            className="text-gray-400 hover:text-white"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}
