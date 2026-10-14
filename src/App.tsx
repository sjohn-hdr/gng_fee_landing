import './App.css'
import { applications } from './config/applications'

function App() {
  return (
    <div className="portal-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="HDR internal applications home">
          <span className="brand-mark" aria-hidden="true">HDR</span>
          <span className="brand-label">Internal applications</span>
        </a>
        <span className="header-note">EMPLOYEE PORTAL</span>
      </header>

      <main className="portal-main" aria-labelledby="page-title">
        <div className="page-intro">
          <h1 id="page-title">Applications</h1>
          <p className="intro-copy">
            Access the Go no Go and Fee Applications from one place.
          </p>
        </div>

        <section className="application-grid" aria-label="Available applications">
          {applications.map((application) => (
            <article
              className={`application-card application-card--${application.id}`}
              key={application.id}
            >
              <div className="application-mark" aria-hidden="true">
                {application.name.slice(0, 1)}
              </div>
              <div className="application-copy">
                <p className="application-type">INTERNAL APPLICATION</p>
                <h2>{application.name}</h2>
                <p className="application-description">{application.description}</p>
              </div>
              <a
                className="application-link"
                href={application.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${application.name} application`}
              >
                Open Application
                <span className="link-arrow" aria-hidden="true" />
              </a>
            </article>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <span>HDR Internal Applications</span>
      </footer>
    </div>
  )
}

export default App
