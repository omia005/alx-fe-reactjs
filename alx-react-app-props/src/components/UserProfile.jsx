import React,{useContext} from 'react';
import {UserContext} from './UserContext.js'

function UserProfile() {
  const { name, email, bio } = useContext(UserContext);
  
  return(
    <div>
       <h2>name: {name}</h2>
       <p>Email: {email}</p>
       <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
