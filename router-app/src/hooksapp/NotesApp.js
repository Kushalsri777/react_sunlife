import React, { useEffect, useState } from "react";

function NotesApp(props) {
  // const [users]= useState(['admin', 'manager','QA'])

  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('notes')));
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(users));
  }, [users]);

 



  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { title, email }]);
  };

  return (
    <div>
      <p>Users Data</p>
      {users.map((udata) => (
        <div>
          <p>{udata.title + " " + udata.email}</p>
          <button
            onClick={() => {
              setUsers((prevState) => {
                return prevState.filter((obj) => obj != udata);
              });
            }}
          >
            Delete
          </button>
        </div>
      ))}
      {/* <p>{users.map()}</p> */}
      <div>
        <form onSubmit={addUser}>
          UserName:{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Add User</button>
        </form>
      </div>
    </div>
  );
}

export default NotesApp;
