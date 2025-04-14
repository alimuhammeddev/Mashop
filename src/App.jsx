import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Layout from "./Components/Layout";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Withdrawal from "./Pages/Withdrawal";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/customers"
          element={
            <Layout>
              <Customers />
            </Layout>
          }
        />
        <Route
          path="/analytics"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />
        <Route
          path="/withdraw"
          element={
            <Layout>
              <Withdrawal />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
