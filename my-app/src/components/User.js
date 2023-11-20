// import {Component} from 'react'
// import Button from '@mui/material/Button';

// export default class User extends Component{
//     render(){
//         return (
//             <div>
//                 {this.props.ud}
//                 {/* <h2>User works....!</h2> */}
//                 <Button variant="contained" onClick={()=>this.props.deluser(this.props.ud)}>Delete</Button>
//             </div>
//         )
//     }
// }


import Button from '@mui/material/Button';

export default function User (props){
        return (
            <div>
                {props.ud}
                <Button variant="contained" onClick={()=>props.deluser(props.ud)}>Delete</Button>
            </div>
        )
}