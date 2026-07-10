# 🏡 Great Villa — Official Website

> A beautifully crafted website for a luxury villa, built with a Node.js backend and a clean vanilla HTML/CSS/JS frontend.
> This is a collaborative project by a group of friends. 🤝

---

## 👥 Team

| Name | Role |
|------|------|
| *(Add your name)* | *(Add your role)* |
| *(Add your name)* | *(Add your role)* |
| *(Add your name)* | *(Add your role)* |

---

## 🗂️ Project Structure

```
greatvilla/
│
├── frontend/                        # All client-side files
│   ├── public/                      # Static assets served directly
│   │   ├── images/
│   │   │   ├── rooms/               # Room photos
│   │   │   ├── amenities/           # Pool, gym, spa, etc.
│   │   │   └── gallery/             # General gallery images
│   │   ├── videos/                  # Hero / promo videos
│   │   └── fonts/                   # Custom font files
│   │
│   ├── css/                         # Stylesheets
│   │   ├── style.css                # Global styles
│   │   ├── home.css
│   │   ├── rooms.css
│   │   ├── booking.css
│   │   └── contact.css
│   │
│   ├── js/                          # Client-side JavaScript
│   │   ├── main.js                  # Global scripts (navbar, scroll, etc.)
│   │   ├── booking.js               # Booking form logic
│   │   └── gallery.js               # Gallery / lightbox
│   │
│   └── pages/                       # HTML pages (except index)
│       ├── rooms.html
│       ├── amenities.html
│       ├── gallery.html
│       ├── booking.html
│       ├── about.html
│       └── contact.html
│
├── backend/                         # Node.js server
│   ├── src/
│   │   ├── controllers/             # Route handler logic
│   │   │   ├── bookingController.js
│   │   │   ├── contactController.js
│   │   │   └── roomController.js
│   │   │
│   │   ├── routes/                  # Express route definitions
│   │   │   ├── bookingRoutes.js
│   │   │   ├── contactRoutes.js
│   │   │   └── roomRoutes.js
│   │   │
│   │   ├── models/                  # Database models (MongoDB / SQL)
│   │   │   ├── Booking.js
│   │   │   ├── Room.js
│   │   │   └── Contact.js
│   │   │
│   │   ├── middleware/              # Express middleware
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   │
│   │   ├── config/                  # App configuration
│   │   │   ├── db.js                # Database connection
│   │   │   └── env.js               # Environment variable loader
│   │   │
│   │   └── utils/                   # Helper functions
│   │       ├── sendEmail.js         # Email utility (nodemailer)
│   │       └── dateHelpers.js
│   │
│   ├── uploads/                     # Uploaded files (ignored by Git)
│   ├── logs/                        # Server logs (ignored by Git)
│   ├── server.js                    # Entry point
│   ├── package.json
│   └── .env.example                 # Environment variable template
│
├── docs/                            # Project documentation
│   ├── API.md                       # API endpoint documentation
│   └── SETUP.md                     # Local setup guide
│
├── .github/
│   └── workflows/                   # GitHub Actions CI/CD
│
├── index.html                       # Main landing page (root)
├── .gitignore
└── README.md                        # You are here
```

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB *(or update as needed)* |
| Email | Nodemailer |
| Deployment | *(e.g. Render / Railway / VPS)* |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js `v18+`
- npm
- MongoDB (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/greatvilla.git
cd greatvilla
```

### 2. Setup the backend
```bash
cd backend
npm install
cp .env.example .env
# Fill in your credentials in .env
node server.js
```

### 3. Open the frontend
Open `index.html` directly in your browser, or serve via a live-server extension.

---

## 📋 Environment Variables

Create a `.env` file inside `backend/` based on `.env.example`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

---

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit: `git commit -m "Add: your feature"`
3. Push to your branch: `git push origin feature/your-feature-name`
4. Open a Pull Request

---

## 📄 License

This project is for educational / personal use. All rights reserved by the team.

---

> Built with love by the Great Villa Team
