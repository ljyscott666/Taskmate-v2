

export default function AddTask({tasklist,setTasklist,task ,setTask}) {



  const handleSubmit = (e) => {
        e.preventDefault();

           if(task.id) {
          //如果有task id 就证明已经存在那么现在的逻辑就是执行edit功能
           const date = new Date()
            const updateTask = tasklist.map( (todo)=> 
             (todo.id  ===task.id ? {id:task.id, name:task.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo) 
            )   ;
            setTasklist(updateTask)  ;
            setTask({});
           }
           else {
             const date = new Date();
        //Date是自带的函数 实例化一个date函数
        const newTask = {
          id: date.getTime(),
          name:e.target.task.value, 
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist, newTask])
        setTask({});
      //这种是点击的时候就是空值  所以是在添加的状态     
      }





       
  }


  
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
         <input type='text'name='task' value={task.name || ""} onChange={(e)=>setTask({...task,name:e.target.value})} autoComplete='off' placeholder='add Task' maxLength="25"></input>
         <button type='submit' >{task.id ? "updated" : "add"}</button>

      </form>
    </section>
  )
}
