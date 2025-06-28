import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import LoginEmail from "./pages/LoginEmail";
import SignUpEmail from "./pages/SignUpEmail";
import Chat from "./pages/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-email" element={<LoginEmail />} />
        <Route path="/signup-email" element={<SignUpEmail />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
