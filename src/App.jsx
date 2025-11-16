import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import AdminDashboard from './admin/AdminDashboard';
import CreateProject from './admin/CreateProject';
import EditProject from './admin/EditProject';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto p-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/create" element={<CreateProject />} />
            <Route path="/admin/edit/:id" element={<EditProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;