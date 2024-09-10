import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/root/home"
import Pricing from "./pages/root/pricing"
import TermsOfService from "./pages/root/terms-of-service"
import PrivacyPolicy from "./pages/root/privacy-policy"
import Blogs from "./pages/root/blogs"
import SignIn from "./pages/auth/sign-in"
import Signup from "./pages/auth/sign-up"
import ResetPassword from "./pages/auth/reset-password"
import ForgotPassword from "./pages/auth/forgot-password"
import SingleBlog from "./pages/root/single-blogs"
import ContactUs from "./pages/root/contact-us"
import RootLayout from "./layouts/root-layouts"
import DashboardLayout from "./layouts/dashboard-layout"
import Dashboard from "./pages/protected/dashboard"
import Features from "./pages/root/features"
import Docs from "./pages/root/docs"
import AboutUs from "./pages/root/about-us"
import ChooseRole from "./pages/auth/choose-role"
import CreateRestaurant from "./pages/auth/create-restaurant"
import CreateVendor from "./pages/auth/create-vendor"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            {/* Root Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<SingleBlog />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Auth Routes */}
            <Route path="/sign-in"element={<SignIn />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/choose-role" element={
              <ChooseRole />
            } />
            <Route path="/create-restaurant" element={<CreateRestaurant />} />
            <Route path="/create-vendor" element={<CreateVendor />} />
          </Route>

          {/* Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
