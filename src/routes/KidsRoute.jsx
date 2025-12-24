import { Navigate } from "react-router-dom";

function KidsRoute({ children }) {
    const profileData = localStorage.getItem("profile");

    if (!profileData) {
        return <Navigate to="/profiles" replace />;
    }

    const profile = JSON.parse(profileData);

    if (!profile.isKids) {
        return <Navigate to="/browse" replace />;
    }

    return children;
}

export default KidsRoute;
