import { useState } from "react";
import { BrowserRouter, Navogate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homepage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
