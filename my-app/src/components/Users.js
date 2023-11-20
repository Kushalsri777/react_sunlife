// import {Component} from 'react'
// import User from './User'
// import Button from '@mui/material/Button';

// export default class Users extends Component{
//     render(){
//         return (
//             <div>
//                 {this.props.userData.map((userd,k) =>  <User key={k} ud={userd} deluser={this.props.du}/> )}
//                 {/* <Button variant="contained">Hello world</Button>; */}
//             <Button variant="contained" disabled={!this.props.dl} onClick={this.props.da}>Delete All</Button>
//             <h2>Users works....!</h2>
//             </div>
//         )
//     }
// }

import {Component} from 'react'
import User from './User'
import Button from '@mui/material/Button';

export default function Users(props){
    
        return (
            <div>
                {props.userData.map((userd,k) =>  <User key={k} ud={userd} deluser={props.du}/> )}
                {/* <Button variant="contained">Hello world</Button>; */}
            <Button variant="contained" disabled={!props.dl} onClick={props.da}>Delete All</Button>
            <h2>Users works....!</h2>
            </div>
        )
    }
