import React from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  user: string | null;
  isAuthenticated: boolean;
  onLogout: () => void;
};

export const Header: React.FC<HeaderProps> = ({ user, isAuthenticated, onLogout }) => (
  <header className="header">
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/cards">Карточки</Link>
      {isAuthenticated && <Link to="/profile">Профиль</Link>}
    </nav>
    <div className="user">
      {isAuthenticated ? (
        <>
          <span>{user}</span>
          <button onClick={onLogout}>Выйти</button>
        </>
      ) : (
        <Link to="/login">Войти</Link>
      )}
    </div>
  </header>
);
