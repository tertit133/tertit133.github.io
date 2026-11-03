# tertit133.github.io

Сайт-портфолио Адем-Тахира Алтуна: **https://tertit133.github.io**

![Превью](public/og-image.png)

Сделан на React и Vite, тёмная тема по умолчанию, адаптивная вёрстка. Публикуется на GitHub Pages автоматически через GitHub Actions при каждом push в `main`.

## Как поменять содержимое

| Что | Где |
|---|---|
| Имя, тексты, контакты, стек, блок «Сотрудничество» | `src/data/profile.js` |
| Проекты | `src/data/projects.js`, картинки в `public/projects/` |
| Резюме и картинка-превью | `assets-src/resume.html`, `assets-src/og-image.html` |

PDF-резюме и картинку-превью пересобирает команда (нужен Microsoft Edge):

```powershell
powershell -ExecutionPolicy Bypass -File assets-src\build-assets.ps1
```

## Локальный запуск

```bash
npm install
npm run dev
```
