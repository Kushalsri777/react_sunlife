// import { Component } from "react";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// export default class AddUser extends Component {
//   addUser = (e) => {
//     e.preventDefault();    //to avoid refresh of form as refresh is a sin it cant happen if there are a lot of components present the page will reload
    
//     const data = e.target.elements.uname.value;
//     alert(data)
//     this.props.au(data)
//   };

//   render() {
//     return (
//       <div>
//         {/* <h2>AddUser works....!</h2> */}
//         <form onSubmit={this.addUser}>
//           UserName:
//           <TextField id="outlined-basic" label="Outlined" variant="outlined" name="uname"/>
//           {/* <input type="text" name="uname" /> */}
//           {/* <button onClick={this.addUser}>Add User button</button> */}
//           <Button variant="contained" type="Submit">Add User button</Button>

//         </form>
//       </div>
//     );
//   }
// }


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AddUser(props){
   const addUser = (e) => {
    e.preventDefault();    

    const data = e.target.elements.uname.value;
    alert(data)
    props.au(data)
  };

  
    return (
      <div>
        <form onSubmit={addUser}>
          UserName:
          <TextField id="outlined-basic" label="Outlined" variant="outlined" name="uname"/>
          <Button variant="contained" type="Submit">Add User button</Button>

        </form>
      </div>
    );
}
