import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from "./Pages/Admin/adminlogin";
import AdminRegister from "./Pages/Admin/adminsignup";
import HomePage from "./Pages/Home/home";


  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/adminsignup" element={<AdminRegister/>} />
          <Route path="/" element={<HomePage/>} />         
        </Routes>
      </BrowserRouter>
    );
  }

export default App;