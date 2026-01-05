import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Dashboard(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/login");
            return;
        }

        axios
    })
}