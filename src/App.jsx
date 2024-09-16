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
import Features from "./pages/root/features"
import Docs from "./pages/root/docs"
import AboutUs from "./pages/root/about-us"
import ChooseRole from "./pages/auth/choose-role"
import CreateRestaurant from "./pages/auth/create-restaurant"
import CreateVendor from "./pages/auth/create-vendor"
import DashboardVendor from "./pages/protected/vendor/dashboard-vendor"
import IsLoggedin from "./middlewares/isLoggedin"
import IsVendor from "./middlewares/isVendor"
import ProfileVendor from "./pages/protected/vendor/profile-vendor"
import Cart from "./pages/protected/restaurant/cart"
import ProductsBuy from "./pages/protected/restaurant/products-buy"
import InvoiceRestaurant from "./pages/protected/restaurant/invoice-restaurant"
import ChatRestaurant from "./pages/protected/restaurant/chat-restaurant"
import DeliveryRestaurant from "./pages/protected/restaurant/delivery-product"
import IsRestaurant from "./middlewares/isRestaurant"
import ProfileRestaurant from "./pages/protected/restaurant/profile-restaurant"
import DashBoardRestaurant from "./pages/protected/restaurant/dashboard-restaurant"
import Settings from "./pages/protected/settings"
import Finance from "./pages/protected/vendor/finanace"
import Inventory from "./pages/protected/vendor/inventory"
import InvoiceVendor from "./pages/protected/vendor/invoice-vendor"
import ChatVendor from "./pages/protected/vendor/chat-vendor"
import DeliveryVendor from "./pages/protected/vendor/delivery-vendor"
import DahsboardLayoutRestaurant from "./layouts/dashboard-layout-restaurant"
import DashboardLayoutVendor from "./layouts/dashboard-layout-vendor"

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

            <Route element={<IsLoggedin />}>
              <Route element={<DashboardLayoutVendor />} >
                <Route element={<IsVendor />}>
                  <Route path="/dashboard-vendor" element={<DashboardVendor />} />
                  <Route path="/profile-vendor" element={<ProfileVendor />} />
                  <Route path="/finanace" element={<Finance />} /> 
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/invoice-vendor" element={<InvoiceVendor />} />
                  <Route path="/chat-ven" element={<ChatVendor />} />
                  <Route path="/delivery-vendor" element={<DeliveryVendor />} />
                </Route>
              </Route>

              <Route element={<IsRestaurant />}>
              <Route element={<DahsboardLayoutRestaurant />}>
                <Route path="/cart" element={<Cart />} /> 
                <Route path="/products-buy" element={<ProductsBuy />} />
                <Route path="/invoice-restaurant" element={<InvoiceRestaurant />} />
                <Route path="/chat-rest" element={<ChatRestaurant />} />
                <Route path="/delivery-product" element={<DeliveryRestaurant />} />
                <Route path="/profile-restaurant" element={<ProfileRestaurant />} />
                <Route path="/dashboard-restaurant" element={<DashBoardRestaurant />} />
                </Route>
              </Route>

              <Route path="/settings" element={<Settings />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
