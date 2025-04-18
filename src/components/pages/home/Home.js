// import React,{useState,useEffect} from 'react'

// const Home = () => {
//     const [user, setUser] = useState(null);

//     useEffect(()=>{
//         const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//         if(loggedInUser){
//             setUser(loggedInUser)
//         }
//     },[])

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       {user ? (
//         <h1>Welcome, {user.firstName} {user.lastName}!</h1>
//       ) : (
//         <h1>Welcome to the Home Page</h1>
//       )}
//     </div>
//   )
// }

// export default Home



import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext'; // Adjust path as needed

const Home = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {loggedInUser ? (
        <h1>Welcome, {loggedInUser.firstName} {loggedInUser.lastName}!</h1>
      ) : (
        <h1>Welcome to the Home Page</h1>
      )}
    </div>
  );
};

export default Home;
