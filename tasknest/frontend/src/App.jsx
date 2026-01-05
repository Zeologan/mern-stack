import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
    console.log("fetch click")
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if(!title) return
    await axios.post("http://localhost:5000/api/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const toggleTask = async(id) =>{
    await axios.put(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>TaskNest</h2>

        {/* Add Task  */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter Task"
        />
        <button onClick={addTask} style={{ backgroundColor: "Green" }}>
          Add
        </button>

        {/* Fetch Task  */}
        <ul>
          {tasks.map((task) => (
            <li key={task._id} style = {{marginTop: "10px"}}>
              <input 
                type="checkbox"
                checked = {task.completed}
                onChange={()=> toggleTask(task._id)}/>
              <span style={{ marginLeft : "8px", textDecoration : task.completed ? "line-through" : "none",}}>
                {task.title}
              </span>
              <button onClick={() => deleteTask(task._id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>


      <BrowserRouter>
          <Routers>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routers>
      </BrowserRouter>
    </>
  );
}

export default App;


