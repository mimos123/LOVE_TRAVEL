## Genral Description 

**LOVE TRAVEL** is a modern web application built with Next.js (React) for the frontend and Django for the backend. This project combines the power of JavaScript and Python to deliver a dynamic, scalable, and stylish platform suitable for travel-related content, booking systems, or travel community sites.

## Features

- **Frontend**: Built using Next.js and React for fast, SEO-friendly, and interactive user experiences.
- **Styling**: Utilizes Tailwind CSS and styled-components for rapid and maintainable UI development.
- **Backend**: Powered by Django, a robust Python web framework, with support for MySQL and image handling (via Pillow).
- **API**: Django REST capabilities (potential for API endpoints).
- **Cross-Origin Support**: Handles cross-origin requests with `django-cors-headers`.
- **Production Ready**: Ready to deploy with both Node.js and Python environments.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, styled-components
- **Backend**: Django, MySQL (with `mysqlclient`), Pillow
- **Build Tools**: PostCSS, Autoprefixer
- **Other**: Django CORS Headers

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Python 3.10+
- MySQL server (if using MySQL as the database)
- npm or yarn
- pip

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/mimos123/LOVE_TRAVEL.git
cd LOVE_TRAVEL
```

#### 2. Install Frontend Dependencies

```bash
npm install
# or
yarn install
```

#### 3. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

#### 4. Database Setup

Make sure your MySQL server is running, and update your Django settings with the correct database credentials.

#### 5. Run Backend

```bash
python manage.py migrate
python manage.py runserver
```

#### 6. Run Frontend

```bash
npm run dev
# or
yarn dev
```

## Project Structure

- `components/` - React components
- `pages/` - Next.js pages/routes
- `styles/` - CSS/Tailwind styles
- `travelio/` - Django project files
- `templates/` - Django HTML templates
- `public/` - Static assets

## Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the frontend for production
- `npm run start` - Start the production frontend
- `python manage.py runserver` - Start Django backend

## Dependencies

### JavaScript

- next
- react
- react-dom
- tailwindcss
- postcss
- autoprefixer
- styled-components

### Python

- Django
- asgiref
- sqlparse
- tzdata
- django-cors-headers
- mysqlclient
- Pillow

See [package.json](./package.json) and [requirements.txt](./requirements.txt) for full lists.
