import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/dashboard/DashboardLayout"
import Dashboard from "./Features/Dashboard/Pages/Dashboard"
import HomeLayout from "./layout/home/HomeLayout"
import Home from "./Features/Home/pages/Home"
import Login from "./Features/auth/Pages/Login"
import Signup from "./Features/auth/Pages/Signup"
import Service from "./Features/service/pages/Service"
import AboutUs from "./Features/aboutus/pages/AboutUs"
import Careers from "./Features/careers/pages/Careers"
import Contact from "./Features/contact/pages/Contact"
import CookiePolicy from "./Features/cookiepolicy/pages/CookiePolicy"
import TermsOfService from "./Features/termsofservice/pages/TermsOfService"
import PrivacyPolicy from "./Features/privacypolicy/pages/PrivacyPolicy"

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
            <Route path="about" element={<AboutUs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cookies" element={<CookiePolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
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
