import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/dashboard/DashboardLayout"
import Dashboard from "./Features/Dashboard/Pages/Dashboard"
import HomeLayout from "./layout/home/HomeLayout"
import Home from "./Features/Home/pages/Home"
import Login from "./Features/auth/Pages/Login"
import Signup from "./Features/auth/Pages/Signup"
import Service from "./Features/service/pages/Service"
export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<HomeLayout />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="services" element={<Service />} />
          </Route>
        </Routes>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
