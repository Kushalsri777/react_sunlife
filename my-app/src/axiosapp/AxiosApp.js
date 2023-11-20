import { Component } from "react";
import axios from 'axios'
import UserData from "./UserData";

// const API_URL='https://jsonplaceholder.typicode.com/users'
const API_URL='http://localhost:8040/mainline/loadAll'
export default class AxiosApp extends Component{

    state={
        users:[]
    }
    componentDidMount(){
        axios.get(API_URL).then(res=>res.data)
        .then((data)=>{
            console.log(data);
            this.setState({users:data})
        })
    }
    render(){
        return(
            <div>
                <p>Userdata</p>
            {/* {this.state.users.map((dt)=>(
                <div key={dt.uid}>
                    <p>{dt.uname}</p>
                    <p>{dt.city}</p>
                </div>
            ))} */}

            <UserData ud={this.state.users}/>

            
            </div>
        )
    }
}