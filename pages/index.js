import React from 'react';

export default function Home() {
  return (
    <main style={{ maxWidth: 600, margin: '3rem auto', fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h1>Hello from Vercel!</h1>
      <p>
        This is a Next.js landing page for the <b>travel.io</b> project.
      </p>
      <p>
        <b>Django + Vercel Example:</b>
        <ul>
          <li>
            <code>INSTALLED_APPS</code> includes <code>example</code> in <code>api/settings.py</code>.
          </li>
          <li>
            <code>ALLOWED_HOSTS</code> allows <code>127.0.0.1</code> and <code>.vercel.app</code> subdomains.
          </li>
          <li>
            <code>wsgi.py</code> exposes <code>app = get_wsgi_application()</code>.
          </li>
          <li>
            <code>WSGI_APPLICATION = 'api.wsgi.app'</code> in <code>settings.py</code>.
          </li>
          <li>
            <code>example/views.py</code> renders the current time.
          </li>
          <li>
            <code>example/urls.py</code> exposes the view at the root path.
          </li>
          <li>
            <code>api/urls.py</code> includes <code>example.urls</code>.
          </li>
        </ul>
      </p>
      <p>
        <b>Running Locally:</b>
        <br />
        <code>python manage.py runserver</code>
      </p>
      <p>
        Your Django application is now available at <a href="http://localhost:8000">http://localhost:8000</a>.
      </p>
    </main>
  );
}
