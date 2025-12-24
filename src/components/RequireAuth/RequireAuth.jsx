import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentUser) {
      toast.warning("Please log in or sign up to access this feature.");
    }
  }, [currentUser]);

  if (!currentUser) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
