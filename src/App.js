import React from 'react'

import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Navbar from './Navbar'; 

import { useState,useEffect} from "react"


function App() {

  const [showAddTask, setShowAddTask] = useState(false);
 // const [addshow, setaddshow] = useState(false)
  const [tasks, setTasks] = useState([])

    useEffect(() => {
      const getTasks = async () => {
        const dataFromServer = await fetchTasks()
        setTasks(dataFromServer)
      }
    
      getTasks()
    }, [])
    
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      return data;
    }
    




  // task reminder 
  const taskReminder = (id) => {
    console.log(id);
  }

  const onTaskReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ?{...task, reminder:!task.reminder}: task))
  
  }

  // add task
     const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    } )
  
    const data = await res.json()
    setTasks([...tasks, data])
  }
  


  // delete task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    })

  // updating the state...which excludes item whose id is passed
    setTasks(tasks.filter((task) => task.id !== id))
}

  //const show=()=>{
   // setaddshow(!addshow)
    //  }
    

  return (
    <div className="container">
    
   
      <Header onAdd={ () => setShowAddTask(!showAddTask)}/>
      
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Navbar />
      
      {tasks.length > 0 ? 
      <Tasks 
        tasks={tasks}
        onDelete={deleteTask}
        onReminder={onTaskReminder}
       />
      : 'No Tasks Available for Today'}
  </div>
  );
      }
    
export default App;

