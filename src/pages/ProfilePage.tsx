import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditView } from '../components/EditView';
import { profileFields } from '../data/profileFields';
import { setField } from '../features/profileSlice';
import { RootState } from '../store';

export const ProfilePage: React.FC = () => {
  const values = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  const handleChange = (name: string, value: any) => {
    dispatch(setField({ name, value }));
  };

  return (
    <div className="page-body">
      <h1>Профиль</h1>
      <EditView fields={profileFields} values={values} onChange={handleChange} />
      <button onClick={() => console.log(values)}>Сохранить (mock)</button>
    </div>
  );
};