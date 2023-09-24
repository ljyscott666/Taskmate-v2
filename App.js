import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import './App.css';
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import ShowTask from "./components/ShowTask";
function App() {

  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist"))||[] );
const [task, setTask] = useState({});

useEffect(()=> {
  localStorage.setItem("tasklist" , JSON.stringify(tasklist))
},[tasklist])
//tasklist 是依赖  字面意思就是每次 tasklist 变化就在localstorage里面存消息


  return (
    <div className="App">
      <Header />
       <AddTask  tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}></AddTask>
    
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}></ShowTask>
      <Footer />
    </div>
  );
}

export default App;
