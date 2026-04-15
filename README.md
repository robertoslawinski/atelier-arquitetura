# 🌿 CP Studio — Architecture Portfolio Website

🔗 Live Website: https://cristianepassos.com/

---

## 📌 Overview

This project is a **modern, minimalist portfolio website** developed for an architecture studio, focused on showcasing high-end residential and interior design projects.

The goal was to create a **clean, elegant and highly visual experience**, aligned with the concept of architecture with identity and meaning.

---

## ✨ Key Features

- 🎨 Minimalist and elegant UI design  
- 🖼️ Project-based portfolio structure  
- ⚡ Fast-loading static website  
- 📱 Responsive layout (desktop & mobile)  
- 🧩 Modular and scalable structure  
- 🌐 Deployed with Netlify (CI/CD from GitHub)  

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- Google Fonts  
- Netlify (Deployment)  
- Git & GitHub (Version Control)  

---

## 📁 Project Structure

```
atelier-arquitetura/
├── index.html        # Portfolio (Work)
├── about.html        # About page
├── css/
│   └── style.css     # Global styles
├── images/           # Project assets
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

1. Clone the repository:
```
git clone https://github.com/robertoslawinski/atelier-arquitetura.git
```

2. Open the folder in VS Code

3. Run with Live Server:
- Install Live Server extension  
- Click "Go Live"  

---

## 🖼️ Image Management

Project images are stored in the `/images` folder.

To update images:
- Replace files inside `/images`  
- Or update the `src` path inside HTML files  

Example:
```
<img src="images/project-name.jpg" alt="Project description">
```

---

## 🎨 Customization

### Colors

Edit CSS variables in:
```
css/style.css
```

```
:root {
  --color-bg:    #ffffff;
  --color-text:  #1a1a1a;
  --color-light: #888888;
}
```

---

### Typography

- Headings: Cormorant Garamond  
- Body: Raleway  

Both loaded via Google Fonts.

---

### Projects

Each project is a reusable component:

```
<article class="project-card">
```

You can duplicate, edit, or remove blocks easily.

---

## 🌍 Deployment

This project is deployed using Netlify with automatic updates from GitHub.

Every push to `main` branch triggers a new deployment.

---

## 🎯 Purpose

This project demonstrates:

- Frontend fundamentals (HTML & CSS)  
- Clean UI/UX design principles  
- Real-world client project structure  
- Deployment and domain configuration  
- Git workflow and version control  

---

## 👤 Author

**Roberto Sławiński**  
Full Stack Web Developer  

🔗 https://github.com/robertoslawinski  
💼 Open to opportunities in Web Development  

---

## 📌 Notes

This is a static website focused on performance, simplicity and visual storytelling — ideal for portfolio-driven businesses.
