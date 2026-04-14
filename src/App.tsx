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
import UserManagement from "./Features/admin/pages/UserManagement"
import ProviderApproval from "./Features/admin/pages/ProviderApproval"
import CategoryManagement from "./Features/admin/pages/CategoryManagement"
import BookingMonitoring from "./Features/admin/pages/BookingMonitoring"
import ContactSubmissions from "./Features/admin/pages/ContactSubmissions"
import Reviews from "./Features/admin/pages/Reviews"
import ProviderDashboard from "./Features/provider/ProviderDashboard"
import Availability from "./Features/provider/Availability"
import BookingRequests from "./Features/provider/BookingRequests"
import Earnings from "./Features/provider/Earnings"
import ProviderProfile from "./Features/provider/ProviderProfile"
import ActiveJobs from "./Features/provider/ActiveJobs"
import MyBookings from "./Features/customer/MyBookings"
import MyReviews from "./Features/customer/MyReviews"
import Profile from "./Features/customer/Profile"
import NotFoundPage from "./Features/common/NotFoundPage"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFoundPage />} />
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
            <Route path="admin/users" element={<UserManagement />} />
            <Route path="admin/approvals" element={<ProviderApproval />} />
            <Route path="admin/categories" element={<CategoryManagement />} />
            <Route path="admin/Bookings" element={<BookingMonitoring />} />
            <Route path="admin/reviews" element={<Reviews />} />
            <Route path="admin/contact" element={<ContactSubmissions />} />

            <Route path="provider/dashboard" element={<ProviderDashboard />} />
            <Route path="provider/availability" element={<Availability />} />
            <Route path="provider/requests" element={<BookingRequests />} />
            <Route path="provider/earnings" element={<Earnings />} />
            <Route path="provider/profile" element={<ProviderProfile />} />
            <Route path="provider/jobs" element={<ActiveJobs />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="/reviews" element={<MyReviews />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
