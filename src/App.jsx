import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Today from "./pages/today/Today";
import Login from "./pages/login/Login";
import ProtectedRoute from "./protectedRoutes/ProtectedRoutes.jsx";

function App() {
  return (
    <main className="p-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upComing" element={<Home />} />
        <Route path="/calendar" element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/today" element={<Today />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
