
import axios from 'axios'
import UserData from "./UserData";
import { useEffect, useState } from 'react';

const API_URL='https://jsonplaceholder.typicode.com/users'
// const API_URL='http://localhost:8040/mainline/loadAll'
export default function AxiosApp (props){

    const [state, setState] = useState({users:[]});

    
    useEffect(() => {
        axios.get(API_URL).then(res=>res.data)
        .then((data)=>{
            console.log(data);
            setState({users:data})
        })
    },[]);
    
        return(
            <div>
                <p>Userdata</p>
            

            <UserData ud={state.users}/>

            
            </div>
        )
}