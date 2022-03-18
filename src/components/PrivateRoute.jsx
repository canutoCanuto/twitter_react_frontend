import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element, ...rest }) {
  const user = useSelector((state) => state.users[0]);
  if (!user) {
    return <Navigate to="/welcome" />;
  } else {
    return element;
  }
}

export default PrivateRoute;
