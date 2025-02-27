import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* <h1>Welcome to MyShop</h1> */}
          <Outlet />
        </Container>
      </main>
      <Footer />
      {/* <h1>My Shop</h1> */}
    </>
  );
};

export default App;
