import React from "react";
import NavBar from "./Components/NavBar.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import Posts from "./Components/Posts.jsx";
import Contacts from "./Components/Contacts.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
}


export default App;
