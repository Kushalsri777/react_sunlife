// import {Component} from 'react'
// export default class Header extends Component{
//     render(){
//         return (
//             <div>
//                 {/* <h2>Header works....!</h2> */}
//                 <h2>{this.props.hd}</h2>
//             </div>
//         )
//     }
// }

export default function Header (props){
        return (
            <div>
                <h2>{props.hd}</h2>
            </div>
        )
}