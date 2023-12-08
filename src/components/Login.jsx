import React from 'react'
import UserContext from '../context/UserContext'
function Login(){
// Jo username and Password se value aegi, uske liye state to lagegi,
// but wo state store krne ke liye useState?



const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState(''); 

// UserContest me jo value hai wo use krne ke liye useContext
const {setUser} = React.useContext(UserContext)
const {user} = React.useContext(UserContext)
const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('login')
    setUser({username, password})
    // console.log(user);
  } 
return(
    <div>
        <h1>Login</h1>
        {
          // Controlling the values of the input fields using state
        }
        <input type="text" placeholder='enter username' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        {" : "}
        <input type="password" placeholder='enter password' 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
        />
         {"    :    "}
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}
export default Login