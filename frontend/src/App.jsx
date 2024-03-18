import { useState,useId } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [items,setItems] = useState([
    {name:"Harsh",age:'23'},
    {name:"Prashant",age:'34'},
    {name:"Rohit",age:'45'}
  ])

  const handleDelete = (index)=>{
    const newItems = items.filter((item,index1)=>index1!==index)
    setItems(newItems)
  }

  const addItem = (e) =>{
    e.preventDefault()
    console.log("working")
    const nameSpace=document.getElementById('nameid')
    const ageSpace=document.getElementById('ageid')
    const msg = document.getElementById('message')
    if(nameSpace.value=="" || ageSpace.value==""){
      console.log("enter something")
      msg.innerText="Enter some Fucking data"
      
    }
    else{
    const newItems=[...items,{name:name,age:age}]
    setItems(newItems)
    msg.innerText=""
    nameSpace.value=""
    ageSpace.value=""
    
    }
  }

  return (
    <>
      <div id='title1'>
        <h3>Name</h3>
        <h3>Age</h3>
        <h3>Remove</h3>
      </div>
      {
        items.map((item,index)=>(
          <div key={index} id='cont'>
            <div id='itemName'>{item.name}</div>
            <div id='itemAge'>{item.age}</div>
            <button onClick={()=>handleDelete(index)} id='deletebtn'>Delete</button>
          </div>
        ))
      }
      <h4 id='message'></h4>
      <h3>Add item</h3>
      <div id='bottomid'>
      <input type="text" required placeholder='name' id='nameid' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" required placeholder='age' id='ageid' onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={(e)=>addItem(e)} id='addbtn'> Add Item </button>
      </div>
    </>
  )
}

export default App

//name, gmail, phone, branch, year of passout
