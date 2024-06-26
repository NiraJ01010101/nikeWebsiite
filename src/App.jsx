import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Home";
import Shoping from "./pages/shoping/Shoping";
import ContactUs from "./pages/contactUs/ContactUs";
import Review from "./pages/Review/Review";
// import './App.css'

const App = () => {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "shoping",
        element: <Shoping />
      },
      {
        path: "reviews",
        element: <Review />
      },
      {
        path: "contactUs",
        element: <ContactUs />
      },
    ]
  }
])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
