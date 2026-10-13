//is used as a fallback page when the user enters a wrong URL

import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <main className="container">
      <section className="detail-card">
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link className="button primary" to="/">Go back to tasks</Link>
      </section>
    </main>
  );
}
