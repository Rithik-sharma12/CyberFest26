# Cyberfeast - Static Website

A modern, cyberpunk-themed event registration platform built with pure HTML, CSS, and JavaScript.

## ✨ Features

- 🎨 **Cyberpunk Design** - Modern, futuristic UI with neon colors and glowing effects
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** - Pure HTML/CSS/JS with no build process required
- 💾 **Client-Side Storage** - Registrations saved in browser localStorage
- 🎯 **6 Pre-loaded Events** - Sample events ready to explore
- 🚀 **Simple Registration** - Just name, email, and phone - no authentication needed
- 🎭 **Event Filtering** - Filter by category (Tech, Cultural, Sports, Business)
- 🔍 **Event Details** - View full event information in beautiful modals

## 🚀 Quick Start

### No Installation Required!

This is a pure static website. Just open `index.html` in your browser:

1. **Download or clone** this repository
2. **Open** `index.html` in any modern web browser
3. **That's it!** The website is ready to use

### Using a Local Server (Optional)

For the best experience, you can serve it with a simple HTTP server:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

**Option 2: Node.js**
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server -p 8000

# Then visit http://localhost:8000
```

**Option 3: VS Code Live Server**
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## 📂 File Structure

```
KCG_EVENT/
├── index.html       # Main HTML file
├── style.css        # All styles and animations
├── script.js        # Event data and functionality
└── README.md        # This file
```

## 🎯 Features Overview

### Events Management
- View all events in a beautiful grid layout
- Filter events by category (All, Tech, Cultural, Sports, Business)
- Click on any event to view full details
- Real-time capacity tracking

### Registration System
- Simple registration form (Name, Email, Phone)
- Form validation
- Duplicate registration prevention
- Registrations stored in browser localStorage
- Visual feedback on successful registration

### User Interface
- Smooth scrolling navigation
- Animated hero section with statistics
- Interactive event cards with hover effects
- Modal popups for event details and registration
- Success notifications
- Fully responsive design for all screen sizes

## 🎨 Customization

### Changing Events
Edit the `events` array in `script.js`:

```javascript
const events = [
    {
        id: 1,
        title: 'Your Event Name',
        description: 'Event description...',
        date: '2026-03-15',
        time: '10:00 AM',
        venue: 'Event Venue',
        capacity: 500,
        registered: 0,
        fee: 500,
        category: 'tech',
        image: 'image-url.jpg',
        // ... more fields
    }
    // Add more events
];
```

### Changing Colors
Edit CSS variables in `style.css`:

```css
:root {
    --primary: #ff0055;      /* Main accent color */
    --secondary: #00ffff;    /* Secondary accent */
    --accent: #ffff00;       /* Additional accent */
    --dark: #0a0a0f;        /* Background */
    /* ... more variables */
}
```

## 🌐 Deployment

This static website can be deployed to any hosting service:

### Free Hosting Options

1. **GitHub Pages**
   - Push code to GitHub
   - Enable GitHub Pages in repository settings
   - Your site will be live at `username.github.io/repo-name`

2. **Netlify**
   - Drag and drop the entire folder to Netlify
   - Or connect your GitHub repository
   - Free SSL and custom domain support

3. **Vercel**
   - Import project from GitHub
   - Automatic deployments on push
   - Free hosting with great performance

4. **Cloudflare Pages**
   - Connect GitHub repository
   - Fast global CDN
   - Free SSL included

### Traditional Hosting
Simply upload all files to your web server via FTP or file manager.

## 💾 Data Storage

- All registrations are stored in browser's `localStorage`
- Data persists between sessions
- No backend or database required
- To clear data: Open browser console and run `localStorage.clear()`

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript (ES6+)** - Vanilla JS, no frameworks or libraries

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

---

**Made with ❤️ for Cyberfeast 2026**
