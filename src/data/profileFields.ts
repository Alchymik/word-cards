import { ProfileField } from '../types';

export const profileFields: ProfileField[] = [
  { name: 'firstName', label: 'Имя', type: 'text', required: true },
  { name: 'lastName', label: 'Фамилия', type: 'text', required: true },
  { name: 'age', label: 'Возраст', type: 'number' },
  { name: 'email', label: 'Email', type: 'text' },
  { name: 'bio', label: 'О себе', type: 'textarea' },
  { name: 'birthDate', label: 'Дата рождения', type: 'date' },
  { name: 'country', label: 'Страна', type: 'select', options: ['Россия', 'США', 'Германия', 'Франция'] },
  { name: 'city', label: 'Город', type: 'text' },
  { name: 'newsletter', label: 'Подписка на новости', type: 'checkbox', options: ['Email', 'SMS', 'Push'] },
  { name: 'contactMethod', label: 'Предпочтительный контакт', type: 'radio', options: ['Email', 'Телефон', 'Telegram'] },
  { name: 'accountType', label: 'Тип аккаунта', type: 'select', options: ['personal', 'company'] },
  { name: 'companyName', label: 'Название компании', type: 'text' },
  { name: 'taxId', label: 'ИНН', type: 'text' },
  { name: 'middleName', label: 'Отчество', type: 'text' },
  { name: 'website', label: 'Сайт', type: 'text' },
  { name: 'phone', label: 'Телефон', type: 'text' },
  { name: 'position', label: 'Должность', type: 'text' },
  { name: 'experience', label: 'Опыт (лет)', type: 'number' },
  { name: 'salary', label: 'Желаемая зарплата', type: 'number' },
  { name: 'skills', label: 'Навыки', type: 'checkbox', options: ['JS', 'TS', 'React', 'Redux', 'Node'] },
];