import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Plans from "./pages/Plans";
import Profiles from "./pages/Profiles";
import Browse from "./pages/Browse";
import Kids from "./pages/Kids";

import ProtectedRoute from "./routes/ProtectedRoute";
import KidsRoute from "./routes/KidsRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/profiles" element={<Profiles />} />

        <Route
          path="/browse"
          element={
            <ProtectedRoute>
              <Browse />
            </ProtectedRoute>
          }
        />

        <Route
          path="/kids"
          element={
            <ProtectedRoute>
              <KidsRoute>
                <Kids />
              </KidsRoute>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
