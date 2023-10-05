import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/product/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ErrorPage from "./pages/ErrorPage";
import ShoppingCart from "./pages/cart/ShoppingCart";
import SignIn from "./pages/signin/SignInPage";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import PaymentPage from "./pages/payment/PaymentPage";
import UserProfilePage from "./pages/profile/UserProfilePage";

import { fetchCategory } from "./actions/category-actions";
import { useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/:productId" element={<ProductDetailPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
