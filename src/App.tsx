import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { CardsPage } from './pages/CardsPage';
import { ProfilePage } from './pages/ProfilePage';
import { RootState } from './store';
import { logout } from './features/authSlice';

export const App: React.FC = () => {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Header
        user={user}
        isAuthenticated={isAuthenticated}
        onLogout={() => dispatch(logout())}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/cards"
            element={
              <ProtectedRoute>
                <CardsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer
        email="support@wordcards.ru"
        phone="+7 999 123-45-67"
        address="Москва, ул. Примерная, 1"
      />
    </div>
  );
};
