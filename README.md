# React + TypeScript + Vite

https://www.figma.com/design/OZjZUbqUid4S5GurLyJtvn/Music-Player-Website---App--Melodies---Community-?node-id=1-4&t=7GBMH3aYMClFaTde-0

1. добавить поиск и добавить хук для него useDebounce на другой странице
2. Добавить анимации
3. Добавление страницы избранное
4. Добавить фичу, которая будет добавлять понравишееся треки на страницу избранного
5. Добавить страницу плейлистов, где можно будет создать свой плейлист
6. Добавить еще одну кнопку для треков, благодаря ему, можно будет добавлять трек к плейлисту
7. Добавить сохранение треков в плейлисте через localStorage
8. Добавить сохрание понравишееся музыки через localStorage
9. Ленивая загруска для страницы плейлистов
10. Слушать треки в перемешку
11. Создавать автоматически данные, когда кидаешь в папку, если например нету превью, то становилась статическая фотография
12. Добавить где нужно NotFound, а так же добавить для них дизайн

<!-- Идеи -->
<!-- Скрыть/Показать LeftBar (Redux)-->

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
