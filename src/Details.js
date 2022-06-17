import React, {useState, useEffect} from 'react'
import './App.css';

function Details (props) {
  const [user, setUser] = useState(); 
  
  useEffect(() => {
    console.log("id: ",props.id,"name:",props.name);
        
    fetch(process.env.REACT_APP_DATA_URL+'/'+props.id+".json")
      .then((response) => response.json()) 
      .then((json) => setUser(json));
      console.log("user",user)
    }, [props])
    if (user !== undefined) {
      return (
        <div>
          <table>
            <tr>
              <th>{user.name}</th>
            </tr>
            <tr>
              <img src={user.avatar} alt="user.avatar"></img>
            </tr>
            <tr>
              <th>City:</th>
              <td>{user.details.city}</td>
            </tr>
            <tr>
              <th>Company:</th>
              <td>{user.details.company}</td>
        
            </tr>
            <tr>
              <th>Position</th>
              <td>{user.details.position}</td>
            </tr>
          </table>
        </div>
      )
    } else {
        return (
            <></>
        )
    }
};

  export default Details;