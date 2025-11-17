import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import AdminLayout from "./admin/AdminLayout";
import Admin from "./admin/Admin";
import CreateProject from "./admin/CreateProject";
import EditProject from "./admin/EditProject";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./admin/AdminLogin";

// Protected route for admin
const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return isAdmin ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin" 
              element={<AdminRoute><AdminLayout /></AdminRoute>}
            >
              <Route index element={<Admin />} />
              <Route path="create" element={<CreateProject />} />
              <Route path="edit/:id" element={<EditProject />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
