import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  const fetchUser = () => {
    getDoc(doc(db, "users", user.uid))
      .then((data) => {
        console.log(data.data());
        setUserData(data.data());
      });
  };

  return (
    <div className="dashboard-container">
      <p style={{ fontSize: "25px" }} className='dashboard-container p'>Login Details</p>
      {userData && (
        <table className="user-table">
          <thead>
            <tr>
              <th style={{padding:"20px", marginLeft: "20px"}} className='user-table th'>Name</th>
              <th style={{padding:"20px", marginLeft: "20px"}} className='user-table th'>Email</th>
              <th style={{padding:"20px", marginLeft: "20px"}} className='user-table th'>City</th>
              <th style={{padding:"20px", marginLeft: "20px"}} className='user-table th'>Hobby</th>
            </tr>
          </thead>
          <tbody>
            <tr className='user-table tr:last-child td'>
              <td className='user-table td'>{userData.name}</td>
              <td className='user-table td'>{userData.email}</td>
              <td className='user-table td'>{userData.city}</td>
              <td className='user-table td'>{userData.hobby}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
