import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { increment } from "./slices/counterSlice";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import { fetchCategory } from "./slices/categorySlice";
import { useAppSelector } from "./store";
import Loader from "./components/basic-ui-elements/Loader";
import Notification from "./components/basic-ui-elements/Notification";
import Footer from './components/Footer';

import ProductPage from './pages/ProductPage';
import { fetchProducts } from './slices/productSlice';


function App() {
  const dispatch = useDispatch();

  //const counter = useAppSelector((state) => state.count.value);

  useEffect(() => {
    dispatch(fetchCategory());
   // dispatch(fetchProducts())
  }, []);

  //console.log("hello");
  return (
    <>
      <Header />
      {/* <p>HELLO {counter}</p>
      <Loader variant="success" animation="grow" />
      <Button onClick={() => dispatch(increment())}>cLICK</Button>
      <Notification variant="success" /> */}
      <ProductPage/>
      <Footer/>
    </>
  );
}

export default App;
