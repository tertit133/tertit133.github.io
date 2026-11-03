// Все тексты и контакты сайта — здесь. Меняйте смело, вёрстку трогать не нужно.

export const profile = {
  name: 'Адем-Тахир Алтун',
  initials: 'АА',
  role: 'Разработчик',
  tagline: 'Пишу на C++, C#, Python и JavaScript. Ищу работу в команде разработки и беру частные заказы.',
  about: [
    'Я разработчик: работаю с C++, C#, Python и JavaScript и выбираю инструмент под задачу.',
    'Сейчас ищу место в команде, где смогу расти и приносить пользу. Параллельно беру частные заказы.',
  ],
  telegram: 'https://t.me/tertit133',
  telegramHandle: '@tertit133',
  email: 'tertit133@gmail.com',
  github: 'https://github.com/tertit133',
  githubHandle: 'tertit133',
  resume: '/resume.pdf',
};

export const stack = [
  { name: 'C++', note: 'Производительный код, алгоритмы и структуры данных' },
  { name: 'C#', note: 'Приложения на .NET' },
  { name: 'Python', note: 'Скрипты, автоматизация, бэкенд' },
  { name: 'JavaScript', note: 'Веб-интерфейсы и сайты' },
];

export const offers = [
  {
    title: 'Работа в команде',
    text: 'Рассматриваю предложения о работе разработчиком. Готов к тестовому заданию и собеседованию.',
    cta: 'Скачать резюме',
    href: profile.resume,
  },
  {
    title: 'Частные заказы',
    text: 'Разработка под вашу задачу: от скриптов и автоматизации до веб-приложений. Опишите задачу — отвечу, как её решить и сколько это займёт.',
    cta: 'Обсудить в Telegram',
    href: profile.telegram,
  },
];
