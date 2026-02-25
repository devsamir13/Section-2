'use client'
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const TodoList = () => {

    // let count = 1;

    // const [count, setCount] = useState(1);

    const [tasklist, settasklist] = useState([
        { task: 'Dhoodh lao', completed:false },
        { task: 'Dhaniya lao', completed:false },
        { task: 'Ata lao', completed:false }
    ])

    const addNewTask = (e) => {
        if (e.code === 'Enter')
        {
            console.log(e.target.value);
            
            const newTask = { task: e.target.value, completed: false };

            settasklist( [newTask, ...tasklist] )

            e.target.value = '';
        }
    };

    const deleteTask = (index) => {
        const temp = tasklist;
        temp.splice(index, 1);
        settasklist([...temp]);
    }

  return (
    <div className='h-screen bg-gray-100'>


        {/* <h1 className='text-3xl font-blod'>{count}</h1>

        <button className='border p-3'
            onClick={() => {
                setCount(count + 1);
                console.log(count);
                
            }}
            >click Me
        </button> */}

        <div className='container max-auto py-10'>
            <h1 className='text-center font-bold text-4xl mb-5'>Todo List</h1>
            <div className='bg-white rounded-xl border'>
                <div className='flex justify-between p-4 border-b-1'>
                    <input 
                        onKeyDown={ addNewTask }
                        type="text" 
                        className='py-2 px-4 bg-gray-200 w-full rounded-lg'
                        placeholder='Enter Your Task here...'
                    />
                </div>
                <div className='p-4'>

                    {
                        tasklist.length === 0 ? (
                            <p className='text-gray-400 font-bold text-center text-2xl'>
                            😒 No Todos Here
                            </p>
                        ):(
                            tasklist.map( (obj, index) => {
                                return <div key={index} 
                                className='border border-gray-400 p-4 mb-4 rounded-xl shadow-lg flex justify-between items-center'>
                                    
                                    <div className='w-1/3 flex gap-3'>
                                        <input type="checkbox" 
                                            onChange={ (e) => {
                                                const temp = tasklist;
                                                temp[index].completed = e.target.checked;
                                                settasklist([...temp]);
                                            }}
                                        />
                                        <p className='text-lg'>
                                        {obj.task}
                                    </p>
                                    </div>
                                    
                                    
                                    {
                                        obj.completed ? (
                                            <p className='text-sm font-semibold bg-green-200 text-green-800 px-2 rounded-full'>
                                                Completed</p>
                                        ) : (
                                            <p className='text-sm font-semibold bg-amber-200 text-amber-800 px-2 rounded-full'>
                                                Pending</p>
                                        )
                                    }

                                    <button 
                                        onClick= { () => { deleteTask(index) } }
                                        className='bg-red-500 text-white p-2 rounded-md'>
                                        <Trash2/>
                                    </button>
                                </div>
                            })
                        )
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default TodoList;