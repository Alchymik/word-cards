import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileData } from '../types';

const initialProfile: ProfileData = {
  firstName: 'Иван',
  lastName: 'Иванов',
  age: 30,
  email: 'ivan@example.com',
  bio: 'Люблю React и TypeScript',
  birthDate: '1994-01-01',
  country: 'Россия',
  city: 'Москва',
  newsletter: ['Email'],
  contactMethod: 'Email',
  accountType: 'personal',
  companyName: '',
  taxId: '',
  middleName: '',
  website: '',
  phone: '+7 900 000-00-00',
  position: 'Frontend Developer',
  experience: 5,
  salary: 200000,
  skills: ['JS', 'TS', 'React'],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfile,
  reducers: {
    setField(state, action: PayloadAction<{ name: string; value: any }>) {
      state[action.payload.name] = action.payload.value;
    },
    resetProfile() {
      return { ...initialProfile };
    },
  },
});

export const { setField, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
