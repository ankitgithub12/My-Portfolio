# Ankit Kumar - Portfolio Website

A modern, responsive, and dynamic portfolio website showcasing personal projects, skills, certifications, and coding stats. Built with a focus on performance, aesthetics, and user experience.

- **Live URL:** [https://my-portfolio-hkt8.onrender.com/](https://my-portfolio-hkt8.onrender.com/)
- **Backend URL:** [https://my-portfolio-backend-e7x8.onrender.com](https://my-portfolio-backend-e7x8.onrender.com)

## 🚀 Features

- **Dynamic Hero Section:** Engaging introduction with smooth animations and professional branding.
- **Project Showcase:** Detailed view of key projects with descriptions and links.
- **Experience & Education:** Chronological overview of professional background and academic achievements.
- **Skill Set:** Categorized list of technical proficiencies with modern icons.
- **Coding Stats Scraper:** Live stats from platforms like LeetCode and GeeksforGeeks, fetched via a custom backend service.
- **Certifications:** Gallery of professional certifications and achievements.
- **Contact Form:** Fully functional contact section for inquiries.
- **Custom Cursor:** Enhanced user interaction with a custom-designed cursor.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.

## 🛠️ Tech Stack

### Frontend
- **React.js:** Component-based UI library.
- **Vite:** High-performance build tool for modern web projects.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **React Icons & Heroicons:** Comprehensive icon libraries for a modern look.
- **Axios:** For handling API requests to the backend.

### Backend
- **Node.js & Express:** Robust server-side framework.
- **Cheerio:** Fast, flexible, and lean implementation of core jQuery for scraping coding stats.
- **Node-Cache:** In-memory caching for optimized performance of stat fetching.
- **CORS:** Configuration for secure cross-origin resource sharing.
- **Dotenv:** Environment variable management.

## 📁 Project Structure

```text
My Portfolio Website/
├── frontend/             # React + Vite + Tailwind CSS code
│   ├── src/
│   │   ├── components/   # UI components (Hero, Navbar, About, etc.)
│   │   ├── App.jsx       # Main application entry point
│   │   └── index.jsx     # Render root
│   └── package.json
├── backend/              # Node.js + Express API
│   ├── services/         # Scraping logic (LeetCode, GFG)
│   ├── server.js         # Express server setup
│   └── package.json
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v20.x recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd "My Portfolio Website"
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` directory:
```env
PORT=5000
```
Start the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
Start the frontend:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 🔌 API Endpoints (Backend)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Check backend server status. |
| `POST` | `/api/contact` | Submit contact form data. |
| `GET` | `/api/stats/:leetcode/:gfg` | Fetch coding stats for LeetCode and GFG users. |

## 📄 License

This project is licensed under the MIT License.

---
Built with ❤️ by [Ankit Kumar](https://github.com/ankitgithub12)
