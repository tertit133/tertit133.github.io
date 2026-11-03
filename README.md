# tertit133.github.io

Сайт-портфолио Адем-Тахира Алтуна: **https://tertit133.github.io**

![Превью](public/og-image.png)

Сделан на React и Vite, тёмная тема по умолчанию, адаптивная вёрстка. Публикуется на GitHub Pages автоматически через GitHub Actions при каждом push в `main`.

## Как поменять содержимое

| Что | Где |
|---|---|
| Имя, тексты, контакты, стек, блок «Сотрудничество» | `src/data/profile.js` |
| Проекты | `src/data/projects.js`, картинки в `public/projects/` |
| Резюме, картинка-превью ссылки, иконка для iOS | `assets-src/resume.html`, `assets-src/og-image.html`, `assets-src/icon.html` |

После правки этих HTML-файлов PDF и картинки пересобирает команда (нужен Microsoft Edge):

```powershell
powershell -ExecutionPolicy Bypass -File assets-src\build-assets.ps1
```

## Локальный запуск

```bash
npm install
npm run dev
```
