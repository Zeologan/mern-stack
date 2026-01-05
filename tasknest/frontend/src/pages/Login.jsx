import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const [form, setForm] = useState({email:"", password: ""});
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const res = await axios.post("http://localhost:5000/api/auth/login",form);

        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
    }
}

return(
    <form onSubmint={handleSubmit}>
        <h2>login</h2>

        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value})}/>
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value})}/>

        <button>Login</button>
    </form>
)
export default Login;