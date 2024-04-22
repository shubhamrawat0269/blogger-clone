import { Navigate } from "react-router-dom";

const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("admin"));
  // console.log(user);
  if (user?.user?.email === "rawatshubam269@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/adminlogin"} />;
  }
};

export default ProtectedRouteForAdmin;
