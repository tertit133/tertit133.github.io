import { useEffect, useState } from 'react';
import { profile, stack, offers } from './data/profile.js';
import { projects } from './data/projects.js';
import {
  SunIcon,
  MoonIcon,
  MenuIcon,
  CloseIcon,
  MailIcon,
  DownloadIcon,
  ExternalIcon,
  TelegramIcon,
  GitHubIcon,
} from './icons.jsx';

const NAV = [
  { id: 'about', label: 'Обо мне' },
  { id: 'stack', label: 'Стек' },
  { id: 'projects', label: 'Проекты' },
  { id: 'work', label: 'Сотрудничество' },
  { id: 'contacts', label: 'Контакты' },
];

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b0f17' : '#f6f7fb');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* приватный режим — просто не запоминаем */
    }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

function Header() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__mark">{profile.initials}</span>
          <span className="logo__text">{profile.name}</span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Разделы сайта">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
            title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__avatar" aria-hidden="true">
          {profile.initials}
        </div>
        <p className="hero__status">
          <span className="dot" /> Открыт к предложениям и заказам
        </p>
        <h1 className="hero__title">
          {profile.name}
          <span className="hero__role">{profile.role}</span>
        </h1>
        <p className="hero__lead">{profile.tagline}</p>
        <ul className="chips" aria-label="Языки программирования">
          {stack.map((s) => (
            <li key={s.name} className="chip">
              {s.name}
            </li>
          ))}
        </ul>
        <div className="hero__cta">
          <a className="btn btn--primary" href={profile.telegram} target="_blank" rel="noreferrer">
            <TelegramIcon /> Написать в Telegram
          </a>
          <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
            <DownloadIcon /> Резюме (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Projects() {
  if (projects.length === 0) {
    return (
      <div className="empty card">
        <p className="empty__title">Проекты скоро появятся здесь</p>
        <p className="muted">Сейчас готовлю их к публикации. Пока можно заглянуть в мой GitHub.</p>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
          <GitHubIcon /> github.com/{profile.githubHandle}
        </a>
      </div>
    );
  }

  return (
    <div className="projects">
      {projects.map((p) => (
        <article key={p.title} className="card project">
          {p.image && <img className="project__img" src={p.image} alt={`Скриншот проекта ${p.title}`} loading="lazy" />}
          <div className="project__body">
            <h3>{p.title}</h3>
            <p className="muted">{p.description}</p>
            <ul className="chips chips--small">
              {p.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
            <div className="project__links">
              {p.code && (
                <a href={p.code} target="_blank" rel="noreferrer">
                  <GitHubIcon /> Код
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  <ExternalIcon /> Демо
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#about">
        Перейти к содержимому
      </a>
      <Header />
      <main>
        <Hero />

        <Section id="about" title="Обо мне">
          <div className="about">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="stack" title="Стек">
          <ul className="stack">
            {stack.map((s) => (
              <li key={s.name} className="card stack__item">
                <span className="stack__name">{s.name}</span>
                <span className="muted">{s.note}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Проекты">
          <Projects />
        </Section>

        <Section id="work" title="Сотрудничество">
          <div className="offers">
            {offers.map((o) => (
              <div key={o.title} className="card offer">
                <h3>{o.title}</h3>
                <p className="muted">{o.text}</p>
                <a className="link-arrow" href={o.href} target="_blank" rel="noreferrer">
                  {o.cta} →
                </a>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contacts" title="Контакты">
          <p className="muted contacts__lead">Быстрее всего отвечаю в Telegram.</p>
          <div className="contacts">
            <a className="card contact" href={profile.telegram} target="_blank" rel="noreferrer">
              <TelegramIcon />
              <span>
                <span className="contact__label">Telegram</span>
                {profile.telegramHandle}
              </span>
            </a>
            <a className="card contact" href={`mailto:${profile.email}`}>
              <MailIcon />
              <span>
                <span className="contact__label">Почта</span>
                {profile.email}
              </span>
            </a>
            <a className="card contact" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
              <span>
                <span className="contact__label">GitHub</span>
                {profile.githubHandle}
              </span>
            </a>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container">
          © {year} {profile.name}
        </div>
      </footer>
    </>
  );
}
