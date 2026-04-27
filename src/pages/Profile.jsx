import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar';
import { useAuth } from "../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const handleLogout = async () => {
    await logout();
    navigate("/login"); // Send user to login or home after logging out
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const ref = doc(db, "apps", "Velora", "users", user.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setUserData(snap.data());
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (user) fetchUser();
  }, [user]);
  return (
    <div className="page-container profile-page">
      <Navbar />
      <main className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-circle">
              {user?.email?.charAt(0).toUpperCase() || "V"}
            </div>
            <h2>Tech Profile</h2>
          </div>

          <div className="profile-info">
            <label>Username</label>
            <p>{userData?.username || "No Username"}</p>

            <label>Email Address</label>
            <p>{user?.email || "Guest"}</p>
          </div>

          {/* Use the new handleLogout function */}
          <button className="logout-btn" onClick={handleLogout}>LOGOUT</button>
        </div>
      </main>
    </div>
  );
};

export default Profile;