import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const loggedIn = localStorage.getItem("loggedIn");
    const plan = localStorage.getItem("plan");
    const profile = localStorage.getItem("profile");

    if (!loggedIn) return <Navigate to="/login" replace />;
    if (!plan) return <Navigate to="/plans" replace />;
    if (!profile) return <Navigate to="/profiles" replace />;

    return children;
}

export default ProtectedRoute;
