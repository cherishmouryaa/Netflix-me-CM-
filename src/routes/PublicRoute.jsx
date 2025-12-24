import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn) {
        return <Navigate to="/browse" replace />;
    }

    return children;
}

export default PublicRoute;
