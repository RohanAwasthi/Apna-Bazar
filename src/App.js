import React from 'react'
import { useState } from "react"
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Navbar from './Navbar'; 
import ImageAndTextExample from './components/Image';


function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [addshow, setaddshow] = useState(false)
  const [tasks, setTasks] = useState([

    {
      
        id:1,
        text: 'Mobile Phone',
        day: 'Iphone,Samsung,Redmi',
        reminder: true
    },
    {
        id:2,
        text: 'Food',
        day: 'Grains,Bevarages,Dairy Products',
        reminder: true
    },
    {
        id:3,
        text: 'Electronics',
        day: 'Laptop,Earphones,Speakers',
        reminder: false
    },
    {
        id:4,
        text: 'clothes',
        day: 'Mens ,Women',
        reminder: true
    }

])


  // task reminder 
  const taskReminder = (id) => {
    console.log(id);
  }

  const onTaskReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ?{...task, reminder:!task.reminder}: task))
  
  }

  // add task
  const addTask = (task) => {
     const id = Math.floor(Math.random()*10000+1);
     console.log(id);

     const newTask = { id, ...task}
     setTasks([...tasks, newTask])
  }
  


  // delete task
  const deleteTask = (id) => {
    // updating the state...which excludes item whose id is passed
      setTasks(tasks.filter((task) => task.id !== id))
  }

  const show=()=>{
    setaddshow(!addshow)
      }
    

  return (
    <div className="container">
    
   
      <Header onAdd={ () => setShowAddTask(!showAddTask)}/>
      
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Navbar onshow={show} addshow={addshow}/>
      
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

