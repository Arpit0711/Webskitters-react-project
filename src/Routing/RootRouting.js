import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "../Components/About/About";
import Login from "../Components/Authentication/Login/Login";
import Profile from "../Components/Authentication/Profile/Profile";
import Contact from "../Components/Contact/Contact";
// import Category from "../Components/Explore/Category/Category";
import Footer from "../Components/Footer/Footer";
import GameDetails from "../Components/GameDetails/GameDetails";
import Home from "../Components/Home/Home";
import Header from "../Components/Layout/Header/Header";
import Registration from "./../Components/Authentication/Registration/Registration";
import ProtectedRoutes from "./ProtectedRoute";

import Spinner from "react-bootstrap/Spinner";
const Category = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Components/Explore/Category/Category")),
      1000
    );
  });
});

export const RootRouting = () => {
  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <center>
            <h1 style={{ color: "red" }}>
              <Spinner animation="border" variant="warning" />
            </h1>
          </center>
        }
      >
        <Routes>
          <Route path="" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}

          <Route path="/explore" element={<Category />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="gameDetails/:id" element={<GameDetails />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};
