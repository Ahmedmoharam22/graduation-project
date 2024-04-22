import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import WhishList from "./pages/whishList/WhishList";
import Layout from "./Components/Layout/Layout"
import Cart from './pages/cart/Cart';
import { Fragment } from "react";
import OilProducts from './pages/oilProducts/OilProducts';
import HoneyProducts from './pages/honeyProducts/HoneyProducts';
import HerbalProducts from './pages/herbalProducts/HerbalProducts';
import AiChat from './pages/Ai/AiChat';
import SingleProductPage from "./pages/singleProductPage/SingleProductPage";
function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/honeyproducts",
          element: <HoneyProducts />,
        },
        {
          path: "/oilproducts",
          element: <OilProducts />,
        },
        {
          path: "/herbalproducts",
          element: <HerbalProducts />,
        },
        {
          path: "/aichat",
          element: <AiChat />,
        },
        {
          path: "/singleproductpage/:id",
          element: <SingleProductPage />,
        },
        {
          path: "/whislist",
          element: <WhishList />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Cart />,
        },
        {
          path: "/register",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <Fragment>
    <RouterProvider router={Router} />
  </Fragment>
}

export default App;
