import { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const checkLocalToken = async () => {
      const token = localStorage.getItem("auth"); // Retrieve token from local storage
  
      if (token) {
        // Token found in local storage
        setOk(true); // Render Outlet
      } else {
        // Token not found, try server-side check
        const res = await axios.get("/api/v1/auth/user-auth");
        setOk(res.data.ok); // Server-side check result determines rendering
      }
    };
  
    checkLocalToken(); // Run the check on component mount
  }, []); // Empty dependency array runs the effect only once
  
  return ok ? <Outlet /> : <Spinner />;
  
}

