import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkspacePage from './pages/WorkspacePage';
import BoardsPage from './pages/BoardsPage';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/workspace" element={<WorkspacePage />} />
          <Route path="/boards" element={<BoardsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;