// function UserData(props) {
//   return (
//     <div>
//       <p>UserData</p>
//       {props.ud.map((dt) => (
//         <div key={dt.id}>
//           <p>{dt.username}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserData;


export default function UserData(props) {
    return (
        <div>
            {props.ud.map((dt)=>(
                <div key={dt.uid}>
                    <p>{dt.uname}</p>
                    <p>{dt.city}</p>
                </div>
            ))}

        </div>
    )
}
