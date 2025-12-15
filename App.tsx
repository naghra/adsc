import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardLayout } from './components/DashboardLayout';
import { HomePage } from './pages/Home';
import { ApplyPage } from './pages/Apply';
import { PrivacyPage, TermsPage } from './pages/Legal';
import { LoginPage } from './pages/Login';
import { AdminLogin } from './pages/AdminLogin';
import { DashboardPage } from './pages/Dashboard';

// Public Layout Wrapper
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Layout>{children}</Layout>
);

// Dashboard Layout Wrapper
const DashboardRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <DashboardLayout>{children}</DashboardLayout>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicRoute><HomePage /></PublicRoute>} />
        <Route path="/apply" element={<PublicRoute><ApplyPage /></PublicRoute>} />
        <Route path="/privacy" element={<PublicRoute><PrivacyPage /></PublicRoute>} />
        <Route path="/terms" element={<PublicRoute><TermsPage /></PublicRoute>} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Dashboard Routes - Nested Layout */}
        <Route path="/dashboard/*" element={
          <DashboardRoute>
            <Routes>
                <Route index element={<DashboardPage />} />
                <Route path="request" element={<div className="p-8 text-center text-slate-500">صفحة طلب حساب جديد (قيد التطوير)</div>} />
                <Route path="deposit" element={<div className="p-8 text-center text-slate-500">صفحة الإيداع (قيد التطوير)</div>} />
            </Routes>
          </DashboardRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;