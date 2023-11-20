import React, { createContext, useContext, useState } from 'react';

const empContext = createContext()
function ContextApp(props) {
    const [employee] = useState({id:101, empname:'kushal', city:'gkp', salary:55000})
    return (
        <div>
            <empContext.Provider value={employee}>
            <Employee></Employee>
            </empContext.Provider>
        </div>
    );
}

function Employee(props) {

    const empCon=useContext(empContext)
    return (
        <div>
            <p>UserName: {empCon.empname}</p>
            <p>City: {empCon.city}</p>
            <p>Salary: {empCon.salary}</p>

            <Salary/>
        </div>
    );
}

function Salary(props) {
    return (
        <div>
            Salary
        </div>
    );
}

export default ContextApp;