import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Dashboard/Home";
import Course from "./Pages/Dashboard/Course";
import Students from "./Pages/Dashboard/Students";
import Payment from "./Pages/Dashboard/Payment";
import Report from "./Pages/Dashboard/Report";
import Settings from "./Pages/Dashboard/Settings";
import Update from "./Pages/Update/Update";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="course" element={<Course />}></Route>
          <Route path="students" element={<Students />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="report" element={<Report />}></Route>
          <Route path="setting" element={<Settings />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
