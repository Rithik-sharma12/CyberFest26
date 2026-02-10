import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from '@/components/ui/Toaster';
import RootLayout from '@/layouts/RootLayout';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import CustomCursor from '@/components/ui/CustomCursor';

// Pages
import HomePage from '@/pages/HomePage';
import EventDetailPage from '@/pages/EventDetailPage';
import RegisterEventPage from '@/pages/RegisterEventPage';
import SuccessPage from '@/pages/SuccessPage';
import DashboardPage from '@/pages/DashboardPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CustomCursor />
        <Routes>
          <Route element={<RootLayout />}>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/event/:id" element={<EventDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Protected routes - require authentication */}
            <Route
              path="/register/:id"
              element={
                <ProtectedRoute>
                  <RegisterEventPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <SuccessPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
