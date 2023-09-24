

export default function ShowTask({tasklist,setTasklist,task ,setTask}) {

    
    const handleEdit = (id) => {
         const selectedTask = tasklist.find(todo => todo.id === id)
         //找到我正在编辑的是哪一行
         setTask(selectedTask)
    }

    const handleDelete = (id) => {
       const updatedTasklist = tasklist.filter(todo => todo.id !== id);
       //找到我正在选中的是哪一行 然后删掉
       setTasklist(updatedTasklist) ;
    }

  return (
    <section className="showTask">
         <div className="head">
            <div>  <span className='title'>Todo</span>
            <span className='count'>{tasklist.length}</span></div>
            <button className='clearAll' onClick={()=>setTasklist([])}>clear All</button>
         </div>
         <ul>
            {tasklist.map((todo)=>(
                <li key={todo.id}>
                <p>
                    <span className='name'> {todo.name}</span>
                    <span className='time'> {todo.time}</span>
                </p>
                <i className='bi bi-pencil-square' onClick={()=>handleEdit(todo.id)}></i>

                <i className='bi bi-trash' onClick={()=>handleDelete(todo.id)}> </i>
            </li>
            ))}
            
         </ul>
    </section>
  )
}
