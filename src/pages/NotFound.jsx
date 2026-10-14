import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title" lang="en">
      <div className="not-found-card">
        <p className="not-found-label">ERROR · PAGE NOT FOUND</p>
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 id="not-found-title">This URL is not valid</h1>
        <p className="not-found-description">
          The page you are looking for does not exist or has moved.
          You can return home or keep exploring my projects.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-button not-found-button-primary">
            Back to Home <span aria-hidden="true">→</span>
          </Link>
          <Link to="/projects" className="not-found-button not-found-button-secondary">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
