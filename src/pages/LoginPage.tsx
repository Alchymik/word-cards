import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';
import { RootState } from '../store';

export const LoginPage: React.FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) navigate('/cards');
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ login: loginValue, password }));
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>Вход</h2>
        <input
          placeholder="Логин"
          value={loginValue}
          onChange={e => setLoginValue(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};