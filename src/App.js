import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Pages/LandingPage/LandingPage";
import LandingPageRegister from "./Pages/LandingPageReginster/LandingPageRegister";
import LoginPageForFarmer from "./Pages/LoginPageForFarmer/LoginPageForFarmer";
import LoginPageForWholeseller from "./Pages/LoginPageForWholeseller/LoginPageForWholeseller";
import RegisterPageForFarmer from "./Pages/ReginsterPage/RegisterPageForFarmer/RegisterPageForFarmer";
import RegisterPageForWholeseller from "./Pages/ReginsterPage/RegisterPageForWholeseller/RegisterPageForWholeseller";
import FarmerDashboard1 from "./Pages/FarmersAllPagesAfterLogin/FarmerDashboard1/FarmerDashboard1";
import AddProductByFarmer from "./Pages/AddProductByFarmer/AddProductByFarmer";
import { Toaster } from "react-hot-toast";
import DisplayProductsForFarmer from "./Pages/DisplayProductsForFarmer/DisplayProductsForFarmer2";
import PrivateRoute, { RoleBasedRoute, RoleBasedRoutewholeseller } from "./components/Layout/routes/private";
import WholesellerDashboard from "./Pages/WholesellerDashboard/WholesellerDashboard.jsx";
import WholesellerRoute from "./components/Layout/routes/WholeSellerRoute.js";
import AfterLoginPageCommon from "./Pages/AfterLoginPageCommon/AfterLoginPageCommon.jsx";
import ManageCategory from "./Pages/ManageCategory/ManageCategory.jsx";
import ViewProducts from "./Pages/ViewProducts/ViewProducts.jsx";
import UpdateProductFarmer from "./Pages/UpdateProductFarmer/UpdateProductFarmer.jsx";
import BoughtProducts from "./Pages/BoughtProducts/BoughtProducts.jsx";
import SearchProducts from "./Pages/SearchProducts/SearchProducts.jsx";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import CartPage from "./Pages/CartPage/CartPage.jsx";
import UpdatePeofileW from "./Pages/UpdatePeofileW/UpdatePeofileW.jsx";
import ProfileUpdateFarmer from "./Pages/ProfileUpdateFarmer/ProfileUpdateFarmer.jsx";

import HomepageForWholeseller from "./Pages/HomepageForWholeseller/HomepageForWholeseller.jsx";
import ViewAcceptedProducts from "./Pages/ViewAcceptedProducts/ViewAcceptedProducts.jsx";
            <Route path="/LoginPageForFarmer" element={<LoginPageForFarmer />} />


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
        <Route path="/LandingPageRegister" element={<LandingPageRegister />} />
            <Route path="/LandingPageLogin" element={<LandingPage />} />
            <Route path="/LoginPageForFarmer" element={<LoginPageForFarmer />} />
            <Route path="/LoginPageForWholeseller" element={<LoginPageForWholeseller />} />

            <Route element={<RoleBasedRoute />}>
            <Route path="/HomePage" element={<AfterLoginPageCommon />} />

              </Route>  
            <Route element={<RoleBasedRoutewholeseller />}>
            <Route path="/HomepageWholeseller" element={<HomepageForWholeseller />} />

              </Route>  


          <Route element={<PrivateRoute />}>
            <Route index element={<LandingPage />} />
            
            <Route path="/search" element={<SearchProducts />} />
           
            <Route path="/RegisterPageForFarmer" element={<RegisterPageForFarmer />} />
            <Route path="/RegisterPageForWholeseller" element={<RegisterPageForWholeseller />} />

              <Route path="Dashboard/FarmerDashboard1" index element={<FarmerDashboard1 />} />
              <Route path="AddNewProductFarmer" element={<AddProductByFarmer />} />
           
            <Route path="Dashboard/AddNewProductFarmer" element={<AddProductByFarmer />} />
            <Route path="/DisplayProductsForFarmer" element={<DisplayProductsForFarmer />} />
            <Route path="/Dashboard/FarmerDashboard1/viewProducts" element={<ViewProducts />} />

            <Route path="/Dashboard">
              <Route path="WholesellerDashboard" element={<WholesellerDashboard />} />
            </Route>

            <Route path="/HomePage" element={<AfterLoginPageCommon />} />
            <Route path="/ManageCategory" element={<ManageCategory />} />
            <Route path="/updateProduct/:slug" element={<UpdateProductFarmer />} />
            <Route path="/Dashboard/BoughtProductss" element={<BoughtProducts />} />
            <Route path="/HomepageWholeseller/product/:slug" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="Dashboard/UpdateProfile" element={<UpdatePeofileW />} />
            <Route path="/Dashboard/UpdateProfileFarmer" element={<ProfileUpdateFarmer />} />
            <Route path="/Dashboard/agreedProducts" element={<ViewAcceptedProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;