import './App.css'
import { applications } from './config/applications'

function App() {
  return (
    <div className="portal-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="HDR internal applications home">
          <span className="brand-mark" aria-hidden="true">HDR</span>
          <span className="brand-label">INTERNAL TOOLS</span>
        </a>
      </header>

      <main className="portal-main" aria-labelledby="page-title">
        <div className="intro-layout">
          <div className="page-intro">
            <p className="eyebrow">HDR / DIGITAL WORKSPACE</p>
            <h1 id="page-title">GNG & Fee App Portal</h1>
          </div>
        </div>

        <section className="application-list" aria-label="Available applications">
          {applications.map((application, index) => (
            <article
              className={`application-card application-card--${application.id}`}
              key={application.id}
            >
              <span className="application-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="application-mark" aria-hidden="true">
                {application.name.slice(0, 1)}
              </span>
              <div className="application-copy">
                <p className="application-type">INTERNAL APPLICATION</p>
                <h2>{application.name}</h2>
                {application.description && (
                  <p className="application-description">
                    {application.description}
                  </p>
                )}
              </div>
              <a
                className="application-link"
                href={application.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${application.name} application`}
              >
                <span>Launch</span>
                <span className="link-arrow" aria-hidden="true" />
              </a>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
