import React , { useState } from 'react' ;
import './style.css';
function isEmpty(userName)
{ console.log(userName.length)
    if ( userName.length === 0 || userName === " ") {
       return(<p style={{color: "red"}} >Fill the details</p>)
    }
    
}
// const styles = {
//     border:{
//         // border-style : red ,
//     }
// }
function Login() {
    const [ userName, setName ] = useState('');
    const [ userEmail, setEmail ] = useState('');
    const [ userPassword, setPassword ] = useState('');
    return (
      <div class='main'>
      <form>
      <div id='cen'>
      <label>
        Enter your username:<br/>
        <input  type="text" name="name" onChange={(e)=>setName(e.target.value) } />
        </label>
        <br/>
        <div>{isEmpty(userName)}</div>
        <br/>
      <label>
      Enter your email:<br/>
        <input type="email" name="mail" onChange={(e)=>setEmail(e.target.value)}/>
      </label>
      <br/>
      <div>{isEmpty(userEmail)}</div>
      <br/>
      <label>
      Enter your password:<br/>
        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
      </label>
      <div bstyle={{color: "red"}}>{isEmpty(userPassword)}</div>
      </div>
    </form>
    </div>
    )
}
export default Login ;
