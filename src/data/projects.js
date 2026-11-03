// Проекты для раздела «Проекты».
// Картинки лежат в public/projects/ (их исходники — assets-src/projects/*.html, пересборка — build-assets.ps1).
// featured: true — широкая карточка на всю ширину раздела (для главного проекта).

export const projects = [
  {
    title: 'Proxy Monitor Bot',
    kind: 'Telegram-бот · коммерческий заказ',
    description:
      'Круглосуточно следит за прокси заказчика и по расписанию присылает в Telegram отчёт: что работает, с какой задержкой, что упало и почему.',
    highlights: [
      'Все прокси проверяются параллельно (asyncio): время проверки почти не зависит от их количества.',
      'Без ложных тревог: повторные попытки через 3 независимых сервиса проверки IP.',
      'Причины сбоев простыми словами: таймаут, неверный пароль, прокси недоступен.',
      'Установка на VPS одной командой, автозапуск через systemd, инструкция для заказчика.',
    ],
    stack: ['Python', 'asyncio', 'aiogram 3', 'aiohttp', 'systemd', 'Bash'],
    image: '/projects/proxy-monitor-bot.png',
    imageAlt: 'Отчёт бота в Telegram: статус пяти прокси, у нерабочих указана причина',
    code: 'https://github.com/tertit133/proxy-monitor-bot',
    featured: true,
  },
];
