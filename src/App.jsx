import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./login/SignIn/SignIn.jsx";
import SignUp from "./login/SignUp.jsx";
import ForgetPassword from "./login/ForPass.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
