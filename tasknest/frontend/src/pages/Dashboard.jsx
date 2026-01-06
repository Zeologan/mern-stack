import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/login");
            return;
        }

        axios.get("http://localhost:5000/api/auth/profile",{
            headers:{
                Authorization: `Bearer ${token}`,
            },
        }).then((res)=> setUser(res.data))
        .catch(()=> navigate("/login"));
    },[]);

    const logout = () => {
        const isConfirmed = window.confirm('Are you sure you want to logout?');
        if(isConfirmed){
            localStorage.removeItem("token")
            navigate("/login")
        }   
    }

    return (
        <div>
            <h2>Dashboard</h2>
            {user && <p>Welcome, {user.name}</p>}

            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard;