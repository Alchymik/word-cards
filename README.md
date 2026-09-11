# Word Cards — SPA для изучения иностранных слов

SPA на React + Redux Toolkit + TypeScript. Тестовое задание (frontend).

## Стек

- React 18
- Redux Toolkit + React Redux
- React Router v6
- TypeScript

## Функционал

- `/` — главная страница
- `/login` — авторизация (admin / admin)
- `/cards` — карточки для изучения слов (доступны только авторизованным)
- `/profile` — форма редактирования профиля (доступна только авторизованным)
- Защищённые роуты через `ProtectedRoute`
- Карточки переворачиваются по клику (CSS-анимация)
- 20 полей профиля: text, number, textarea, date, select, checkbox, radio
- Связь полей: при выборе `accountType = company` скрывается `middleName`, а `taxId` становится disabled и заполняется значением `AUTO-TAX-ID`

## Быстрый старт

```bash
git clone https://github.com/Alchymik/word-cards.git
cd word-cards
npm install
npm start
```

Приложение откроется на http://localhost:3000

## Сборка

```bash
npm run build
```

## Демо

Прод-версия задеплоена на Vercel:

https://word-cards-rosy.vercel.app/

## Структура проекта

```
src/
  App.tsx
  index.tsx
  store.ts
  types.ts
  styles.css
  data/
    cards.ts
    profileFields.ts
  features/
    authSlice.ts
    profileSlice.ts
  components/
    Header.tsx
    Footer.tsx
    Card.tsx
    CardList.tsx
    Field.tsx
    EditView.tsx
    ProtectedRoute.tsx
  pages/
    HomePage.tsx
    LoginPage.tsx
    CardsPage.tsx
    ProfilePage.tsx
```

## Доступы

| Логин | Пароль |
|-------|--------|
| admin | admin  |

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm start` | запуск dev-сервера |
| `npm run build` | прод-сборка |
| `npm run deploy` | деплой на GitHub Pages |