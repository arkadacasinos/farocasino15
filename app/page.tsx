const highlights = [
  { label: 'Быстрый вход', text: 'Открывайте Faro Casino с телефона или компьютера без лишних шагов.' },
  { label: 'Актуальное зеркало', text: 'Проверенная ссылка на официальный сайт, если основной адрес недоступен.' },
  { label: 'Игровая коллекция', text: 'Слоты, live-игры и классические развлечения в одном месте.' },
]

const keywords = ['faro casino зеркало', 'faro casino официальный сайт', 'faro казино', 'faro казино онлайн']

function FaroMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-diamond" />
      <span className="brand-dot brand-dot-one" />
      <span className="brand-dot brand-dot-two" />
    </span>
  )
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Faro Casino — на главную">
          <FaroMark />
          <span>FARO <b>CASINO</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#about">О казино</a>
          <a href="#games">Игры</a>
          <a href="#mirror">Зеркало</a>
        </nav>
        <a className="header-link" href="#mirror">Войти <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Официальная площадка</p>
          <h1>Игра начинается<br /><em>с правильного</em> адреса.</h1>
          <p className="hero-text">Faro Casino — современное онлайн-казино с удобным доступом к любимым играм. Найдите актуальное зеркало и заходите без задержек.</p>
          <div className="hero-actions" id="mirror">
            <a className="button button-primary" href="#games">Перейти на сайт <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#about">Узнать больше <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-line"><span>18+</span><span className="trust-rule" /> Играйте ответственно</div>
        </div>
        <div className="hero-art" aria-label="Иллюстрация игральных карт Faro Casino" role="img">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="card card-back"><span>F</span></div>
          <div className="card card-front"><span className="card-suit">♠</span><strong>A</strong><small>FARO</small></div>
          <div className="art-caption"><span>FARO</span><span>EST. 2024</span></div>
        </div>
      </section>

      <section className="intro" id="about">
        <div><p className="section-kicker">01 / Почему Faro</p><h2>Всё необходимое<br />для хорошей игры.</h2></div>
        <p className="intro-text">Мы собрали короткий путь к официальному сайту и объяснили, как найти рабочее зеркало Faro Casino. Сохраняйте страницу, чтобы вход всегда был под рукой.</p>
      </section>

      <section className="feature-grid" id="games" aria-label="Преимущества Faro Casino">
        {highlights.map((item, index) => <article className="feature" key={item.label}><span className="feature-number">0{index + 1}</span><h3>{item.label}</h3><p>{item.text}</p><span className="feature-arrow" aria-hidden="true">↗</span></article>)}
      </section>

      <section className="keyword-strip" aria-label="Популярные запросы"><span>Ищут Faro</span>{keywords.map((keyword) => <a href="#mirror" key={keyword}>{keyword}</a>)}</section>

      <footer className="site-footer"><a className="brand" href="#top"><FaroMark /><span>FARO <b>CASINO</b></span></a><p>© 2024 Faro Casino. Только для совершеннолетних.</p><a href="#top" className="top-link">Наверх ↑</a></footer>
    </main>
  )
}

 
