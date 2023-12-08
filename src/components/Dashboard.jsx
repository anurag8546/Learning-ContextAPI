import React from 'react'
import UserContext from '../context/UserContext'
function Dashboard() {
 const {user} = React.useContext(UserContext);
   
        if(!user)  
    return (<div>No data</div>)
    else
    return (
        <div>
           <h1>Hello</h1>
            <h2>{user.username}</h2>
            <h2>{user.password}</h2>
        </div>
    )
}

export default Dashboard