import React from 'react';

export default function Tasks({task,setTask}){

    return(
       <section className='tasks_container'>
            <h2>
                Afazeres
            </h2>
            <hr/>

            {task.map((Element,index) =>{
                return(
                    <section key={index} style={{borderBottom:"1px solid",marginTop:"3%",padding:"1rem",fontSize:"1.3rem"}} className='task'>
                        {Element.tag ?
                            <>
                                <input 
                                    value={Element.task} 
                                    placeholder='Digite o novo valor'
                                    autoComplete='off'
                                    onChange={(e) =>{
                                        setTask((previousTask) =>{
                                            previousTask[index].task = e.target.value;
                                            return [...previousTask];
                                        })
                                    }}
                                    
                                />
                                <div className="actions">
                                    <i 
                                        style={{cursor:"pointer"}}
                                        className="fa-regular 
                                        fa-floppy-disk"
                                        onClick={() => setTask((previousTask) => {
                                            previousTask[index].tag = false
                                            return [...previousTask];
                                        })}
                                    > 
                                    </i>
                                    <i 
                                        className="fa-solid fa-trash"
                                        onClick={() => setTask(previousTask => previousTask.filter(element => element.task !== Element.task))}
                                    >
                                    </i>
                                </div>
                            </> 

                        : <>
                            <p>{Element.task}</p>
                            <div className="actions">
                            <i
                                style={{cursor:"pointer"}} className="fa-regular fa-pen-to-square"
                                onClick={() => setTask((previousTask) =>{
                                    previousTask[index].tag = true;
                                    return[...previousTask]
                                })}
                            >
                            </i>
                            <i 
                                className="fa-solid fa-trash"
                                onClick={() => setTask(previousTask => previousTask.filter(element => element.task !== Element.task))}
                            >
                            </i>
                            </div>
                         </>
                        }
                    </section>
                )  
            })            
            }
            {task[0] === undefined &&
                <p style={{fontSize:"1.3rem",marginTop:"2%"}}>Nenhuma tarefa está catalogada na lista !</p>
            }
            {task[0] !== undefined && 
                <button onClick={() => setTask([])}>Apagar todas tarefas</button>
            }
       </section>
    )
}