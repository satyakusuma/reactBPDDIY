import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center mt-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserListPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
