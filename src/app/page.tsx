'use client'

import { ChangeEvent, useState } from "react"

export default function Home(){
  const[taskList,setTaskList] = useState(['Coding','Exercise'])
    const[task,setTask] = useState('')

    const handleAddTask = () =>{
      if (task.trim() === '') {
        handleClickEvent();
    } else {
        setTaskList([...taskList, task.trim()]);
        setTask('');
    }
    }
    
    const handletask = (e: ChangeEvent<HTMLInputElement>)=>{
      setTask(e.target.value)
  }

  const handleDeleteTask = (index: number) => {
    setTaskList([
        ...taskList.slice(0, index), 
        ...taskList.slice(index + 1) 
    ]);
};

const handleClickEvent = ()=>{
  alert("Task should not be empty")
}

  return(<div className="grid place-items-center h-screen bg-sky-950">
    <div className="space-y-10">
        <input type="text" name="task" id="task" value={task} onChange={(e)=>handletask(e)} className="block leading-10 rounded-2xl w-96 px-4 py-2"/>
        <div className="space-y-5 flex items-center flex-col">
        <button className="bg-slate-700 px-6 py-4 text-black font-bold rounded-3xl text-2xl" onClick={handleAddTask}>Add Tasks</button>
        <ul className="font-normal text-xl space-y-5 ">
            {
                taskList.map((c,i)=>{
                    return (
                    <li key={i} className="bg-black text-white px-4 py-2 rounded-2xl w-[400px] flex justify-between items-center">
                        <div className='inline-block w-[250px]'>{c}</div>
                        <span><button className="bg-white rounded-lg text-xl h-8 w-8 text-black" onClick={()=>handleDeleteTask(i)}>X</button></span>
                    </li>)
                })
            }
        </ul>
        </div>
    </div>
</div>)
}