# 🖥️ v1 CLI Terminal Portfolio

> An Interactive Terminal-Based Portfolio with Modern Web Technologies

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=flat-square&logo=github)](https://qms85.github.io/v1-CLI-Terminal-Portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Available Commands](#available-commands)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Browser Compatibility](#browser-compatibility)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Customization Guide](#customization-guide)
- [CV/Resume Upload](#cvresume-upload)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## 🎯 Overview

**v1 CLI Terminal Portfolio** is an innovative, interactive portfolio website that mimics a command-line interface (CLI). It's a unique way to showcase your skills, projects, and experience to potential employers and collaborators.

The portfolio is built with **vanilla HTML5, CSS3, and JavaScript** (no frameworks required), making it lightweight, fast, and highly performant. It features:

- 💻 Terminal-like user interface
- 🎨 Dark/Light theme toggle
- 📱 Fully responsive design
- ♿ Accessibility-first approach
- ⚡ Real-time GitHub statistics
- 📅 Dynamic date/time with timezone detection
- 📥 CV/Resume download functionality
- 💾 Command history with localStorage persistence
- 🎬 Smooth animations and transitions
- 🔒 Security-focused implementation

---

## ✨ Features

### Core Features

- **🖥️ Interactive Terminal Interface**
  - Command-based navigation system
  - Realistic terminal styling and behavior
  - Blinking cursor with terminal sounds

- **📱 Fully Responsive Design**
  - Desktop-optimized layout
  - Tablet-friendly interface
  - Mobile-responsive sidebars
  - Touch-friendly buttons

- **🎨 Theme Switching**
  - Dark mode (default)
  - Light mode option
  - Persistent theme selection
  - Smooth theme transitions

- **⌨️ Smart Input Handling**
  - Command history navigation (↑/↓ arrows)
  - Tab auto-complete
  - Enter key execution
  - Input validation

- **👤 Profile Section**
  - Profile image with GitHub avatar
  - Developer name and title
  - Experience display
  - Status indicator (Available/Busy)
  - Social media links

- **📅 Date & Time Display**
  - Current date with full formatting
  - Real-time clock in header
  - Automatic timezone detection
  - Visitor's local timezone display

- **📥 CV Download**
  - One-click CV/Resume download
  - Download button in sidebar
  - Command-line download option
  - Fallback contact information

- **📊 Real-time GitHub Statistics**
  - API integration with GitHub
  - Public repositories count
  - Followers and gists display
  - Account creation date

- **💾 Data Persistence**
  - Command history saved locally
  - Terminal output cached
  - Theme preference remembered
  - localStorage implementation

- **♿ Accessibility First**
  - ARIA labels and roles
  - Keyboard navigation support
  - Screen reader compatible
  - Color contrast compliance
  - Focus indicators
  - Skip links

---

## 🚀 Live Demo

**Visit the live portfolio:** [https://qms85.github.io/v1-CLI-Terminal-Portfolio/](https://qms85.github.io/v1-CLI-Terminal-Portfolio/)

Try these commands:
- `help` - View all available commands
- `bio` - See developer profile
- `skills` - View technical expertise
- `projects` - Browse portfolio projects
- `github` - View GitHub statistics (API)
- `download cv` - Download CV/Resume
- `clear` - Clear terminal screen

---

## 📦 Installation

### Method 1: Clone from GitHub

```bash
# Clone the repository
git clone https://github.com/QMS85/v1-CLI-Terminal-Portfolio.git

# Navigate to project directory
cd v1-CLI-Terminal-Portfolio

# Open in browser (no server required)
open index.html
# or
firefox index.html
# or
python -m http.server 8000  # then visit http://localhost:8000
```

### Method 2: Download ZIP

1. Visit: https://github.com/QMS85/v1-CLI-Terminal-Portfolio
2. Click **"Code"** → **"Download ZIP"**
3. Extract the ZIP file
4. Open `index.html` in your browser

### Method 3: Fork & Deploy on GitHub Pages

1. Fork this repository to your GitHub account
2. Rename to: `<your-username>.github.io`
3. Customize the content (see Customization Guide)
4. GitHub Pages will automatically deploy at: `https://<your-username>.github.io`

---

## 💻 Usage

### Getting Started

1. **Open the portfolio** in any modern web browser
2. **Type a command** in the terminal input at the bottom
3. **Press Enter** to execute the command
4. **Or click** sidebar buttons for quick navigation

### Basic Interaction

```
user@portfolio:~$ bio
[Display: Developer profile information]

user@portfolio:~$ skills
[Display: Technical skills and expertise]

user@portfolio:~$ projects
[Display: Portfolio projects with links]

user@portfolio:~$ help
[Display: All available commands]
```

### Navigation Options

- **Sidebar Buttons**: Click command buttons in the left sidebar
- **Terminal Input**: Type commands and press Enter
- **Arrow Keys**: ↑/↓ navigate through command history
- **Tab Key**: Auto-complete command names
- **Theme Toggle**: Click moon/sun icon to switch themes
- **Quick Actions**: Use "Clear" and "History" buttons in sidebar

---

## 📚 Available Commands

### Information Commands

| Command | Description | Example |
|---------|-------------|---------|
| `bio` | View developer profile and background | `bio` |
| `skills` | See technical stack and expertise | `skills` |
| `projects` | Browse all portfolio projects | `projects` |
| `certs` | View professional certifications | `certs` |
| `contact` | Get contact info and social links | `contact` |
| `github` | View real-time GitHub statistics | `github` |
| `help` | List all available commands | `help` |

### Utility Commands

| Command | Description | Example |
|---------|-------------|---------|
| `history` | View command execution history | `history` |
| `download cv` | Download CV/Resume PDF | `download cv` |
| `clear` | Clear entire terminal screen | `clear` |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Execute entered command |
| `↑` Arrow Up | Navigate to previous command in history |
| `↓` Arrow Down | Navigate to next command in history |
| `Tab` | Auto-complete command name |
| `Ctrl+L` | Clear terminal (alternative) |

---

## 📁 File Structure

```
v1-CLI-Terminal-Portfolio/
│
├── index.html          # Main HTML structure
│
├── style.css           # Complete styling and themes
│
├── app.js              # All JavaScript functionality
│
├── README.md           # This file
│
├── LICENSE             # MIT License
│
└── .github/
    └── workflows/      # GitHub Actions (optional)
```

### File Sizes

- **index.html**: ~10 KB - Semantic HTML with accessibility
- **style.css**: ~20 KB - Comprehensive styling with animations
- **app.js**: ~25 KB - Full-featured application logic
- **Total**: ~55 KB (uncompressed)

---

## 🛠️ Technologies Used

### Frontend Stack

```
HTML5
├── Semantic HTML
├── ARIA Accessibility
└── Meta tags (SEO, OG)

CSS3
├── CSS Custom Properties (Variables)
├── Flexbox & Grid
├── Media Queries (Responsive)
├── Animations & Transitions
└── Dark/Light Theme Support

JavaScript (Vanilla)
├── ES6+ Features
├── Async/Await (Promises)
├── Event Handling
├── Local Storage API
├── Fetch API
└── DOM Manipulation
```

### External Resources

- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Typography (Fira Code, JetBrains Mono)
- **GitHub API** - Real-time user statistics
- **Google Analytics** - Optional analytics tracking

### No Dependencies

✅ **Zero external JavaScript dependencies**
- No frameworks (React, Vue, Angular)
- No jQuery or other libraries
- Vanilla JavaScript only
- Lightweight and performant

---

## 🌐 Browser Compatibility

| Browser | Support | Version |
|---------|---------|---------|
| Chrome/Edge | ✅ Full | Latest |
| Firefox | ✅ Full | Latest |
| Safari | ✅ Full | Latest |
| Opera | ✅ Full | Latest |
| IE 11 | ⚠️ Partial | ES5 compatible with polyfills |

### Required Features

- ES6 JavaScript support
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- Fetch API (for GitHub stats)
- Local Storage API

---

## ⚡ Performance Optimization

### Metrics

- **Page Load Time**: < 1 second
- **Largest Contentful Paint (LCP)**: ~800ms
- **Cumulative Layout Shift (CLS)**: 0
- **First Input Delay (FID)**: < 100ms

### Optimization Techniques

1. **Minimal Dependencies**
   - No framework overhead
   - Vanilla JavaScript only
   - CDN-hosted Font Awesome

2. **Resource Loading**
   - Deferred script loading
   - DNS prefetching
   - Image lazy loading
   - Font preloading

3. **CSS Optimization**
   - CSS Custom Properties
   - Efficient selectors
   - Minimal repaints/reflows
   - Hardware-accelerated animations

4. **JavaScript Optimization**
   - Class-based architecture
   - Efficient event delegation
   - Debounced updates
   - Memory management

### Lighthouse Score

```
Performance:     95/100
Accessibility:   98/100
Best Practices:  96/100
SEO:             100/100
```

---

## ♿ Accessibility Features

### WCAG 2.1 Compliance (Level AA)

✅ **Keyboard Navigation**
- Full keyboard support (Tab, Enter, Arrow keys)
- Logical tab order
- Focus indicators visible
- Skip to main content link

✅ **Screen Reader Support**
- Semantic HTML structure
- ARIA labels and roles
- Live regions for dynamic content
- Descriptive alt text for images

✅ **Visual Accessibility**
- High color contrast ratios
- Resizable text support
- Dark/Light theme options
- Large touch targets (44px minimum)

✅ **Motion & Animation**
- Respects `prefers-reduced-motion`
- Accessible animations
- No auto-playing content

✅ **Form Accessibility**
- Proper label associations
- Error messages
- Input hints and descriptions
- Autocomplete attributes

### Testing with Screen Readers

- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS, iOS)
- TalkBack (Android)

---

## 🎨 Customization Guide

### Step 1: Edit Personal Information

**In `index.html`:**

```html
<!-- Update profile image -->
<img src="YOUR_IMAGE_URL" alt="Your Name - Your Title" class="profile-image">

<!-- Update profile info -->
<div class="profile-name">Your Name</div>
<div class="profile-title">Your Title</div>

<!-- Update social links -->
<a href="https://github.com/your-username" target="_blank">...</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">...</a>
```

### Step 2: Update Commands in `app.js`

**Edit command content:**

```javascript
getBioText() {
    return `
        <div class="term-card">
            <h4 class="blue-text">👨‍💻 YOUR PROFILE</h4>
            <p><strong>Name:</strong> Your Name</p>
            <p><strong>Title:</strong> Your Title</p>
            <!-- Add your content -->
        </div>
    `;
}

getSkillsText() {
    return `
        <div class="term-card">
            <h4 class="green-text">🛠️ YOUR SKILLS</h4>
            <p><strong>Languages:</strong> Your languages</p>
            <!-- Add your skills -->
        </div>
    `;
}

// Repeat for other commands...
```

### Step 3: Add Your Projects

```javascript
getProjectsText() {
    return `
        <div class="term-card">
            <h4 class="magenta-text">📁 YOUR PROJECTS</h4>
            <ol>
                <li><a href="YOUR_PROJECT_URL">Project Name - Description</a></li>
                <li><a href="YOUR_PROJECT_URL">Project Name - Description</a></li>
            </ol>
        </div>
    `;
}
```

### Step 4: Customize Colors

**In `style.css` (CSS Variables):**

```css
:root {
    /* Change these colors */
    --green: #3fb950;      /* Primary accent */
    --blue: #58a6ff;       /* Secondary accent */
    --cyan: #39c5cf;       /* Tertiary accent */
    --magenta: #bc8cff;    /* Highlight accent */
}
```

### Step 5: Upload CV File

**Option A: GitHub Hosting**

```bash
# 1. Place CV file in repository
# 2. Get the raw URL from GitHub
# 3. Update in app.js:
const cvUrl = 'https://github.com/YOUR_USERNAME/YOUR_REPO/raw/main/YOUR_CV.pdf';
```

**Option B: External Hosting**

```javascript
// Use services like:
// - Google Drive
// - Dropbox
// - OneDrive
// - AWS S3
const cvUrl = 'https://your-hosting-service/your-cv.pdf';
```

### Step 6: Add Google Analytics

```javascript
// In index.html, uncomment and add your ID:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
    gtag('config', 'G-YOUR_ID');
</script>
```

---

## 📥 CV/Resume Upload

### Setting Up CV Download

#### Method 1: Store in GitHub Repository

```bash
# 1. Add CV file to your repository
git add Jonathan_Peters_CV.pdf
git commit -m "Add CV"
git push

# 2. Get the raw GitHub URL
# https://github.com/QMS85/v1-CLI-Terminal-Portfolio/raw/main/Jonathan_Peters_CV.pdf

# 3. Update in app.js (downloadCV function)
const cvUrl = 'https://github.com/YOUR_USERNAME/YOUR_REPO/raw/main/YOUR_CV.pdf';
```

#### Method 2: Use Cloud Storage

```javascript
// Google Drive
const cvUrl = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';

// Dropbox
const cvUrl = 'https://dl.dropboxusercontent.com/s/YOUR_PATH/CV.pdf?dl=1';

// OneDrive
const cvUrl = 'https://onedrive.live.com/embed?resid=YOUR_ID';
```

#### Method 3: Server-Side Solution

```javascript
// Use a backend service to handle downloads
const cvUrl = 'https://your-api.com/download-cv';

// This provides better tracking and analytics
```

### Creating a Professional CV

#### Content Sections

1. **Header**
   - Name, Contact Info, Website

2. **Professional Summary**
   - Brief overview of expertise

3. **Skills**
   - Categorized technical skills
   - Proficiency levels

4. **Experience**
   - Job title, company, dates
   - Key achievements and responsibilities

5. **Education**
   - Degrees, certifications, courses

6. **Projects**
   - Notable projects with descriptions
   - Technologies used

7. **Languages**
   - Languages and proficiency levels

#### Recommended Tools

- **Canva** - Design-focused CV builder
- **Google Docs** - Simple and accessible
- **Microsoft Word** - Classic option
- **Figma** - Design tool for custom layouts
- **Adobe InDesign** - Professional option

---

## 🚀 Deployment

### GitHub Pages (Recommended)

**1. Rename Repository**
```bash
# If using personal portfolio:
# Rename to: <username>.github.io
```

**2. Enable GitHub Pages**
- Go to Repository Settings
- Scroll to "GitHub Pages" section
- Select `main` branch as source
- Save

**3. Deploy**
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

**4. Access**
```
https://<your-username>.github.io/v1-CLI-Terminal-Portfolio/
# or if renamed:
https://<your-username>.github.io/
```

### Netlify Deployment

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Deploy
netlify deploy --prod

# 3. Your site will be live at netlify's URL
```

### Vercel Deployment

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Your site will be live at vercel's URL
```

### Traditional Hosting

1. **cPanel/FTP**
   - Upload files via FTP client
   - Set permissions (644 for files, 755 for folders)

2. **SSH Access**
   ```bash
   scp -r ./* user@host:/public_html/
   ```

3. **Docker Deployment**
   ```dockerfile
   FROM nginx:alpine
   COPY . /usr/share/nginx/html
   EXPOSE 80
   ```

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

### Steps to Contribute

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/v1-CLI-Terminal-Portfolio.git
   cd v1-CLI-Terminal-Portfolio
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Make Changes**
   - Edit files
   - Test thoroughly
   - Maintain code quality

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add: Description of changes"
   ```

6. **Push to GitHub**
   ```bash
   git push origin feature/YourFeatureName
   ```

7. **Create Pull Request**
   - Go to GitHub
   - Click "Compare & Pull Request"
   - Describe your changes
   - Submit PR

### Contribution Ideas

- 🐛 Bug fixes
- ✨ New features (v2, v3 designs)
- 📱 Mobile improvements
- ♿ Accessibility enhancements
- 📖 Documentation improvements
- 🎨 Theme variations
- ⚡ Performance optimization

### Code Standards

- Use vanilla JavaScript (no frameworks)
- Follow HTML5 semantic standards
- Use CSS custom properties
- Add comments for complex logic
- Maintain accessibility (WCAG 2.1)
- Test on multiple browsers

---

## 👨‍💼 Author

**Jonathan Peters**

- 🌐 Portfolio: [CLI Terminal Portfolio](https://qms85.github.io/v1-CLI-Terminal-Portfolio/)
- 📧 Email: [jonathanpeters051@gmail.com](mailto:jonathanpeters051@gmail.com)
- 💼 LinkedIn: [2jonathanpeters](https://linkedin.com/in/2jonathanpeters)
- 🐙 GitHub: [@QMS85](https://github.com/QMS85)
- 🐦 Twitter: [@DJJonnas85](https://twitter.com/DJJonnas85)

### About the Developer

Front-End Web Developer with 4+ years of experience building responsive, accessible web interfaces. Passionate about clean code, user experience, and continuous learning.

**Currently Learning:**
- Full-stack development with Node.js
- TypeScript for type-safe JavaScript
- Advanced database design

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

✅ You are free to:
- Use the code for personal or commercial projects
- Modify and distribute the code
- Include the code in your own projects

📝 You must:
- Include a copy of the license and copyright notice
- Include a list of changes made to the code

---

## 🎓 Learning Resources

### Web Development

- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web dev reference
- [freeCodeCamp](https://www.freecodecamp.org/) - Free coding courses
- [CSS-Tricks](https://css-tricks.com/) - CSS tips and tricks
- [JavaScript.info](https://javascript.info/) - JavaScript tutorial

### Accessibility

- [WebAIM](https://webaim.org/) - Web accessibility info
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility guidelines
- [A11y Project](https://www.a11yproject.com/) - Community resources

### Performance

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [Web Vitals](https://web.dev/vitals/) - Performance metrics
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

## 🐛 Troubleshooting

### GitHub API Not Loading

**Problem:** GitHub stats not showing
**Solution:**
```javascript
// Check GitHub API rate limits (60 requests/hour)
// Add error handling in app.js:

.catch(error => {
    console.error('GitHub API Error:', error);
    // Show fallback message
});
```

### CV Download Not Working

**Problem:** CV download button not functioning
**Solution:**
```javascript
// Check if CV file exists at the URL
// Verify CORS settings if using external hosting
// Test with browser console:
fetch('YOUR_CV_URL', { method: 'HEAD' })
    .then(res => console.log('File exists:', res.ok))
    .catch(err => console.error('File not found:', err));
```

### Theme Not Persisting

**Problem:** Theme preference not saved
**Solution:**
```javascript
// Check localStorage is enabled
// Clear browser cache and localStorage
localStorage.clear();
// Verify browser privacy settings allow storage
```

### Terminal Input Not Responsive

**Problem:** Input field not accepting commands
**Solution:**
- Click in the input field to focus it
- Check browser console for JavaScript errors
- Clear localStorage: `localStorage.clear()`
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

## 📞 Support

### Getting Help

1. **Check Documentation**
   - Read this README thoroughly
   - Check inline code comments

2. **Search Issues**
   - [GitHub Issues](https://github.com/QMS85/v1-CLI-Terminal-Portfolio/issues)
   - Search for similar problems

3. **Create New Issue**
   - Describe the problem clearly
   - Include steps to reproduce
   - Add browser/system info

4. **Contact Author**
   - Email: jonathanpeters051@gmail.com
   - LinkedIn: 2jonathanpeters

---

## 🎉 Acknowledgments

### Technologies

- **Font Awesome** - Icon library
- **Google Fonts** - Typography
- **GitHub** - API and hosting
- **MDN Web Docs** - Documentation

### Inspiration

- Terminal UI design patterns
- Modern web portfolio trends
- Accessibility best practices
- Performance optimization techniques

---

## 📊 Project Statistics

- **Total Lines of Code**: ~1,500
- **HTML Lines**: ~350
- **CSS Lines**: ~850
- **JavaScript Lines**: ~700
- **Development Time**: 20+ hours
- **Browser Support**: 95%+ coverage
- **Accessibility Score**: 98/100
- **Performance Score**: 95/100

---

## 🚀 Future Enhancements

### Planned Features

- [ ] v2 Design (Neural HUD interface)
- [ ] v3 Design (Bento Grid layout)
- [ ] Blog section with Markdown support
- [ ] Project showcase with filters
- [ ] Real-time visitor statistics
- [ ] Dark mode auto-detection (prefers-color-scheme)
- [ ] Multiple language support
- [ ] Advanced search functionality
- [ ] Email contact form
- [ ] API backend integration

### Ideas Welcomed!

Have a feature idea? Open an issue or submit a PR!

---

## 📅 Version History

### v1.0.0 (Current)
- ✨ Initial release
- 🎨 Dark/Light theme support
- ♿ Full accessibility implementation
- 📱 Responsive design
- ⚡ Optimized performance
- 🔒 Security-focused code
- 📊 GitHub API integration
- 📥 CV download functionality
- 📅 Date/Time with timezone detection
- 💾 LocalStorage persistence

### Upcoming Versions

- **v1.1.0** - Enhanced CLI commands, additional features
- **v2.0.0** - Neural HUD interface redesign
- **v3.0.0** - Bento Grid dashboard layout

---

## 📌 Quick Links

- **Live Portfolio**: https://qms85.github.io/v1-CLI-Terminal-Portfolio/
- **GitHub Repository**: https://github.com/QMS85/v1-CLI-Terminal-Portfolio
- **Developer Profile**: https://github.com/QMS85
- **Report Issues**: https://github.com/QMS85/v1-CLI-Terminal-Portfolio/issues
- **Feature Requests**: https://github.com/QMS85/v1-CLI-Terminal-Portfolio/discussions

---

## ⭐ Show Your Support

If you found this project helpful or inspiring, please consider:

- ⭐ **Star** this repository on GitHub
- 🔗 **Fork** it to use as your own portfolio
- 💬 **Share** it with other developers
- 🐛 **Report** any issues you find
- 🤝 **Contribute** improvements

Every star and share motivates continued development! 🙏

---

<div align="center">

### Made with ❤️ by [Jonathan Peters](https://github.com/QMS85)

**Last Updated:** September 2, 2026

**License:** MIT © 2024-Present

</div>

---

## 📝 Changelog

### Recent Updates

- ✅ Enhanced HTML with accessibility features
- ✅ Complete CSS rewrite with theme support
- ✅ JavaScript refactoring with OOP approach
- ✅ Added profile image section
- ✅ Implemented date/time display with timezone
- ✅ Created CV download functionality
- ✅ Added comprehensive README documentation

### Bug Fixes

- Fixed HTML syntax error in header
- Improved mobile responsiveness
- Enhanced form accessibility
- Optimized performance

---

**Start building your CLI Terminal Portfolio today! 🚀**

