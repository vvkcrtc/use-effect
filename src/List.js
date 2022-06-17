import React, {useState, useEffect} from 'react'
import './App.css';
import Details from './Details';


function List () {
  const [users, setUsers] = useState([]); 
  const [userId, setUserId] = useState(0); 
  const [userName, setUserName] = useState();
  
  useEffect(() => {
    fetch(process.env.REACT_APP_USERS_URL)
      .then((response) => response.json()) 
      .then((json) => setUsers(json));
      console.log("users",users)
      console.log("userId :",userId)
  }, [userId])
  
  const onClick = (o) =>{
    setUserId(o.id); 
    setUserName(o.name);
  }
  
  return (
    <div>
      <table>
        <tr>
          <td>
            {users.map(o => 
              <tr key={`tr_${o.id}}`}>
                <td key={o.id}> <button onClick={onClick.bind(this,o)}>{o.id} {o.name} </button ></td>
              </tr>)}
          </td>
          <td>
            <Details id={userId} name={userName}/>
          </td>
        </tr>
      </table>
    </div>
  )
};

export default List;