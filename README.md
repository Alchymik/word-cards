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

https://word-cards-alchymik.vercel.app

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

## Деплой

### 1. Пуш на GitHub

```bash
git init
git add .
git commit -m "init word cards app"
git branch -M main
git remote add origin https://github.com/Alchymik/word-cards.git
git push -u origin main
```

### 2. Деплой на Vercel

1. Зайти на https://vercel.com
2. Войти через GitHub
3. **Add New → Project** → выбрать `word-cards`
4. Framework Preset: **Create React App**
5. Build Command: `npm run build`
6. Output Directory: `build`
7. **Deploy**

Готово — ссылка вида `https://word-cards-alchymik.vercel.app`.

### Альтернатива: GitHub Pages

Установить `gh-pages`:

```bash
npm install gh-pages --save-dev
```

Добавить в `package.json`:

```json
{
  "homepage": "https://Alchymik.github.io/word-cards",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Заменить в `src/index.tsx` `BrowserRouter` на `HashRouter`:

```tsx
import { HashRouter } from 'react-router-dom';

<HashRouter>
  <App />
</HashRouter>
```

Задеплоить:

```bash
npm run deploy
```

Ссылка: https://Alchymik.github.io/word-cards/

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm start` | запуск dev-сервера |
| `npm run build` | прод-сборка |
| `npm run deploy` | деплой на GitHub Pages |