import {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import AddUser from './AddUser'
import Users from './Users'
import CounterApp from './CounterApp'
import CounterAppState from './CounterAppState'
import AxiosApp from '../axiosapp/AxiosApp'
export default class MainApp extends Component{


    componentDidMount(){
        console.log('component is loaded')
        const json=localStorage.getItem('slusers')
        const userdata=JSON.parse(json)
        if(userdata){
            this.setState(()=>({userdata}))
        }
    }

    componentDidUpdate(){
        console.log('update')
        const json=JSON.stringify(this.state.userdata)
        localStorage.setItem('slusers',json)
    }

    state={
         headerData : 'Welcome to header app',
         footerData : 'Welcome to footer data',
         userdata : []
    }

    deleteAll=()=>{
        this.setState(()=>{
            return{
                userdata:[]
            }
        })
    }

    deleteUser = (user) => {
        this.setState((prevState) => ({
          userdata: prevState.userdata.filter((option) => user !== option),
        }));
      };

    addUser=(data)=>{
        this.setState((prevState)=>{
            return {
                userdata:prevState.userdata.concat(data)
            }
        })
    }

    render(){
        return (
            <div>
                <AxiosApp/>
                <Header hd={this.state.headerData}/>
                <h2>Mainapp works....!</h2>
                
                <AddUser au={this.addUser}/>
                <Users userData = {this.state.userdata} 
                da={this.deleteAll}
                dl={this.state.userdata.length>0}
                du={this.deleteUser}
                />
                <CounterAppState/>
                <CounterApp/>
                <Footer fd={this.state.footerData}/>
                
            </div>
        )
    }
}