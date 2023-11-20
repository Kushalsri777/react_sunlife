// import {Component} from 'react'
// export default class Footer extends Component{
//     render(){
//         return (
//             <div>
//                 {/* <h2>Footer works....!</h2> */}
//                 <h2>{this.props.fd}</h2>
//             </div>
//         )
//     }
// }

export default function Footer (props){
        return (
            <div>
                <h2>{props.fd}</h2>
            </div>
        )
}