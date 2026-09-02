/**
 * ============================================
 * CLI TERMINAL PORTFOLIO - ENHANCED JAVASCRIPT
 * ============================================
 * Features:
 * - Command History Navigation (↑/↓ arrows)
 * - Tab Auto-Complete
 * - Dark/Light Theme Toggle
 * - LocalStorage Persistence
 * - GitHub API Integration
 * - CV Download Functionality
 * - Date/Time with Timezone Detection
 * - Toast Notifications
 * - Loading States
 * - Error Handling
 * - Accessibility Support
 * ============================================
 */

class TerminalPortfolio {
    constructor() {
        // DOM Elements
        this.output = document.getElementById('terminalOutput');
        this.input = document.getElementById('terminalInput');
        this.cmdLinks = document.querySelectorAll('.cmd-link');
        this.clearBtn = document.getElementById('clearBtn');
        this.historyBtn = document.getElementById('historyBtn');
        this.downloadCVBtn = document.getElementById('downloadCVBtn');
        this.themeToggle = document.getElementById('themeToggle');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        this.toastContainer = document.getElementById('toastContainer');
        this.currentDateElem = document.getElementById('currentDate');
        this.currentTimezoneElem = document.getElementById('currentTimezone');
        this.themeLabel = document.getElementById('themeLabel');
        
        // State Management
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isDarkMode = true;
        
        // Initialize
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.setupEventListeners();
        this.loadState();
        this.startClock();
        this.updateDateTime();
        this.detectTimezone();
        this.initializeTheme();
        this.displayWelcome();
        
        // Update date/time every minute
        setInterval(() => this.updateDateTime(), 60000);
        
        // Track analytics
        this.trackEvent('portfolio_loaded', { timestamp: new Date().toISOString() });
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Terminal input
        this.input.addEventListener('keydown', (e) => this.handleInputKeydown(e));
        this.input.addEventListener('input', () => this.saveState());
        
        // Command link buttons
        this.cmdLinks.forEach(link => {
            link.addEventListener('click', (e) => this.executeFromLink(e));
        });
        
        // Quick action buttons
        this.clearBtn.addEventListener('click', () => this.execute('clear'));
        this.historyBtn.addEventListener('click', () => this.execute('history'));
        this.downloadCVBtn.addEventListener('click', () => this.downloadCV());
        
        // Theme toggle
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Window unload
        window.addEventListener('beforeunload', () => this.saveState());
    }

    /**
     * Handle input keydown events
     */
    handleInputKeydown(e) {
        if (e.key === 'Enter') {
            const cmd = this.input.value.trim();
            if (cmd) {
                this.execute(cmd);
                this.input.value = '';
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateHistoryUp();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateHistoryDown();
        } else if (e.key === 'Tab') {
            e.preventDefault();
            this.autoComplete();
        }
    }

    /**
     * Execute a command
     */
    execute(cmd) {
        const cleanCmd = cmd.toLowerCase().trim();
        
        // Add to command history
        this.commandHistory.unshift(cleanCmd);
        if (this.commandHistory.length > 50) {
            this.commandHistory.pop(); // Keep only last 50 commands
        }
        this.historyIndex = -1;

        // Display command
        this.displayCommand(cleanCmd);

        // Handle clear command
        if (cleanCmd === 'clear') {
            this.output.innerHTML = '';
            this.saveState();
            return;
        }

        // Execute command
        if (this.commands[cleanCmd]) {
            const result = this.commands[cleanCmd].call(this);
            if (result instanceof Promise) {
                this.showLoading(true);
                result
                    .then(res => {
                        this.displayResponse(res);
                        this.showLoading(false);
                    })
                    .catch(err => {
                        this.displayError(`Error: ${err.message}`);
                        this.showLoading(false);
                    });
            } else {
                this.displayResponse(result);
            }
        } else {
            this.displayError(`Command not found: '${this.escapeHtml(cleanCmd)}'. Type 'help' for available commands.`);
        }

        this.saveState();
    }

    /**
     * Execute command from sidebar link
     */
    executeFromLink(e) {
        const cmd = e.currentTarget.dataset.cmd;
        this.cmdLinks.forEach(link => link.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.execute(cmd);
    }

    /**
     * Display a command line
     */
    displayCommand(cmd) {
        const line = document.createElement('div');
        line.className = 'term-line prompt-intro';
        line.innerHTML = `
            <span class="green-text">user@portfolio</span>:
            <span class="blue-text">~</span>$ 
            ${this.escapeHtml(cmd)}
        `;
        this.output.appendChild(line);
    }

    /**
     * Display response text
     */
    displayResponse(html) {
        const line = document.createElement('div');
        line.className = 'term-line response';
        line.innerHTML = html;
        this.output.appendChild(line);
        this.autoScroll();
    }

    /**
     * Display error message
     */
    displayError(message) {
        const line = document.createElement('div');
        line.className = 'term-line response';
        line.innerHTML = `<span style="color:#ff5f56">✗ ${this.escapeHtml(message)}</span>`;
        this.output.appendChild(line);
        this.autoScroll();
    }

    /**
     * Auto-scroll terminal output to bottom
     */
    autoScroll() {
        setTimeout(() => {
            this.output.scrollTop = this.output.scrollHeight;
        }, 0);
    }

    /**
     * Navigate command history up
     */
    navigateHistoryUp() {
        if (!this.commandHistory || this.commandHistory.length === 0) return;
        if (this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            this.input.value = this.commandHistory[this.historyIndex];
        }
    }

    /**
     * Navigate command history down
     */
    navigateHistoryDown() {
        if (this.historyIndex > -1) {
            this.historyIndex--;
            this.input.value = this.historyIndex === -1 ? '' : this.commandHistory[this.historyIndex];
        }
    }

    /**
     * Auto-complete command
     */
    autoComplete() {
        const input = this.input.value.toLowerCase().trim();
        const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(input));
        
        if (matches.length === 1) {
            this.input.value = matches[0];
        } else if (matches.length > 1) {
            this.showToast(`Found ${matches.length} matches: ${matches.join(', ')}`, 'info');
        }
    }

    /**
     * Display welcome message
     */
    displayWelcome() {
        const currentHour = new Date().getHours();
        let greeting = 'Welcome';
        
        if (currentHour < 12) greeting = 'Good morning';
        else if (currentHour < 18) greeting = 'Good afternoon';
        else greeting = 'Good evening';

        const welcomeHTML = `
            <div class="term-card">
                <p>${greeting}! 👋 Welcome to Jonathan Peters' Interactive CLI Terminal Portfolio.</p>
                <p>🎯 Front-End Web Developer | 4+ Years Experience</p>
                <p>Type <span class="cyan-text">'help'</span> to see available commands or click sidebar buttons to navigate.</p>
                <p>📥 Download your copy of my CV using the download button in the sidebar.</p>
            </div>
        `;
        
        this.displayResponse(welcomeHTML);
    }

    /**
     * Commands object - all available commands
     */
    get commands() {
        return {
            help: () => this.getHelpText(),
            bio: () => this.getBioText(),
            skills: () => this.getSkillsText(),
            projects: () => this.getProjectsText(),
            certs: () => this.getCertsText(),
            contact: () => this.getContactText(),
            github: () => this.fetchGitHubStats(),
            history: () => this.getHistoryText(),
            'download cv': () => this.downloadCV(),
        };
    }

    /**
     * Get help text
     */
    getHelpText() {
        return `
            <div class="term-card">
                <h4 class="cyan-text">📋 AVAILABLE COMMANDS</h4>
                <p><strong>Navigation:</strong></p>
                <ul>
                    <li><span class="green-text">bio</span> - View developer profile & background</li>
                    <li><span class="green-text">skills</span> - Technical stack and expertise</li>
                    <li><span class="green-text">projects</span> - Highlighted portfolio projects</li>
                    <li><span class="green-text">certs</span> - Professional certifications</li>
                    <li><span class="green-text">contact</span> - Contact details & social links</li>
                    <li><span class="green-text">github</span> - Real-time GitHub statistics</li>
                </ul>
                <p><strong>Utilities:</strong></p>
                <ul>
                    <li><span class="green-text">history</span> - View command history</li>
                    <li><span class="green-text">download cv</span> - Download CV/Resume PDF</li>
                    <li><span class="green-text">clear</span> - Clear terminal screen</li>
                </ul>
                <p><strong>Keyboard Shortcuts:</strong></p>
                <ul>
                    <li><span class="cyan-text">↑/↓</span> - Navigate command history</li>
                    <li><span class="cyan-text">TAB</span> - Auto-complete command</li>
                    <li><span class="cyan-text">ENTER</span> - Execute command</li>
                </ul>
            </div>
        `;
    }

    /**
     * Get bio text
     */
    getBioText() {
        return `
            <div class="term-card">
                <h4 class="blue-text">👨‍💻 DEVELOPER PROFILE</h4>
                <p><strong>Name:</strong> Jonathan Peters</p>
                <p><strong>Title:</strong> Front-End Web Developer</p>
                <p><strong>Experience:</strong> 4+ Years</p>
                <p><strong>Location:</strong> South Africa (SAST Timezone)</p>
                <p></p>
                <p><strong>About:</strong></p>
                <p>Passionate about building accessible, responsive, high-performance web interfaces. 
                Specialized in converting designs to production-ready code with a focus on user experience 
                and performance optimization.</p>
                <p><strong>Current Focus:</strong></p>
                <ul>
                    <li>Expanding expertise in full-stack development with Node.js</li>
                    <li>Learning TypeScript for type-safe JavaScript development</li>
                    <li>Building scalable web applications with modern tooling</li>
                </ul>
                <p><strong>Contact:</strong></p>
                <p>📧 <a href="mailto:jonathanpeters051@gmail.com" target="_blank">jonathanpeters051@gmail.com</a></p>
                <p>💼 <a href="https://linkedin.com/in/2jonathanpeters" target="_blank">LinkedIn Profile</a></p>
            </div>
        `;
    }

    /**
     * Get skills text
     */
    getSkillsText() {
        return `
            <div class="term-card">
                <h4 class="green-text">🛠️ TECHNICAL SKILLS</h4>
                
                <p><strong>Languages:</strong></p>
                <p>HTML5 • CSS3 • JavaScript (ES6+) • Python • TypeScript • jQuery</p>
                
                <p><strong>Frameworks & Libraries:</strong></p>
                <p>React • Bootstrap • jQuery • SASS/SCSS</p>
                
                <p><strong>Tools & Platforms:</strong></p>
                <p>Git • GitHub • GitHub CLI • VS Code • Chrome DevTools • Figma</p>
                
                <p><strong>APIs & Services:</strong></p>
                <p>REST APIs • GitHub API • Weather API • Geolocation API</p>
                
                <p><strong>Back-End (Learning):</strong></p>
                <p>Node.js • Express.js • MongoDB • Database Design</p>
                
                <p><strong>AI & Development Tools:</strong></p>
                <p>GitHub Copilot • ChatGPT • Google Gemini • Groq • Replit • Base44</p>
                
                <p><strong>Deployment & Hosting:</strong></p>
                <p>GitHub Pages • Netlify • Vercel • Streamlit • Traditional Hosting</p>
                
                <p><strong>Soft Skills:</strong></p>
                <p>Problem-solving • Communication • Attention to Detail • Collaborative Development • Self-Learning</p>
            </div>
        `;
    }

    /**
     * Get projects text
     */
    getProjectsText() {
        return `
            <div class="term-card">
                <h4 class="magenta-text">📁 PORTFOLIO PROJECTS</h4>
                
                <p><strong>Featured Projects:</strong></p>
                <ol>
                    <li><a href="https://gem-jumper-f4f91f18.base44.app/" target="_blank" rel="noopener noreferrer">🎮 Gem-Jumper — Interactive Platform Game</a></li>
                    <li><a href="https://qms85.github.io/SnakeGame2025/" target="_blank" rel="noopener noreferrer">🐍 Funky Snake Game — Retro Style Game</a></li>
                    <li><a href="https://qms85.github.io/Github-User-Search/" target="_blank" rel="noopener noreferrer">🔍 GitHub User Search — API Integration</a></li>
                    <li><a href="https://qms85.github.io/CryptoTrackerPro/" target="_blank" rel="noopener noreferrer">💰 Crypto Tracker Pro — Real-time Data</a></li>
                </ol>
                
                <p><strong>Figma Design Implementation (10+ Projects):</strong></p>
                <ol start="5">
                    <li><a href="https://qms85.github.io/JobListings/" target="_blank">💼 Job Listings</a></li>
                    <li><a href="https://qms85.github.io/ProductListWithCart/" target="_blank">🛒 Product List with Cart</a></li>
                    <li><a href="https://qms85.github.io/EasyBankLandingPage/" target="_blank">🏦 EasyBank Landing Page</a></li>
                    <li><a href="https://qms85.github.io/IPAddressTracker/" target="_blank">📍 IP Address Tracker</a></li>
                    <li><a href="https://qms85.github.io/SocialLinks/" target="_blank">👥 Social Links Profile</a></li>
                    <li><a href="https://qms85.github.io/QRCode/" target="_blank">📱 QR Code Generator</a></li>
                </ol>
                
                <p><strong>Additional Projects:</strong></p>
                <ol start="11">
                    <li><a href="https://qms85.github.io/MultiTimeZoneClock/" target="_blank">🕐 Multi Timezone Clock</a></li>
                    <li><a href="https://qms85.github.io/MusicPlayer/" target="_blank">🎵 Music Player</a></li>
                    <li><a href="https://qms85.github.io/MemeGenerator/" target="_blank">😂 Meme Generator</a></li>
                    <li><a href="https://qms85.github.io/Password-Generator/" target="_blank">🔐 Password Generator</a></li>
                    <li><a href="https://qms85.github.io/GitHubCalculator/" target="_blank">🧮 Simple Calculator</a></li>
                </ol>
                
                <p><em><a href="https://github.com/QMS85?tab=repositories" target="_blank">📂 View all repositories on GitHub →</a></em></p>
            </div>
        `;
    }

    /**
     * Get certifications text
     */
    getCertsText() {
        return `
            <div class="term-card">
                <h4 class="cyan-text">🎓 CERTIFICATIONS & ACHIEVEMENTS</h4>
                <p>All certifications from freeCodeCamp (world's leading free coding platform)</p>
                <p></p>
                <p>✅ <a href="https://www.freecodecamp.org/certification/jonathan_peters/responsive-web-design-v9" target="_blank" rel="noopener noreferrer">
                    Responsive Web Design (RWD)</a></p>
                <p>✅ <a href="https://www.freecodecamp.org/certification/Jonathan_Peters/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer">
                    JavaScript Algorithms & Data Structures</a></p>
                <p>✅ <a href="https://www.freecodecamp.org/certification/Jonathan_Peters/front-end-development-libraries" target="_blank" rel="noopener noreferrer">
                    Front End Development Libraries</a></p>
                <p>✅ <a href="https://www.freecodecamp.org/certification/Jonathan_Peters/data-visualization" target="_blank" rel="noopener noreferrer">
                    Data Visualization with D3.js</a></p>
                <p></p>
                <p><strong>In Progress:</strong></p>
                <p>⏳ Backend Development with Node.js & Express</p>
                <p>⏳ Relational Database Design</p>
                <p></p>
                <p><em>Continuous learning is key to staying current in tech! 🚀</em></p>
            </div>
        `;
    }

    /**
     * Get contact text
     */
    getContactText() {
        return `
            <div class="term-card">
                <h4 class="green-text">📞 CONTACT & SOCIAL LINKS</h4>
                <p></p>
                <p><strong>Direct Contact:</strong></p>
                <p>📧 Email: <a href="mailto:jonathanpeters051@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-envelope"></i> jonathanpeters051@gmail.com</a></p>
                <p></p>
                <p><strong>Professional Networks:</strong></p>
                <p>💼 <a href="https://linkedin.com/in/2jonathanpeters" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin"></i> LinkedIn Profile</a></p>
                <p>🐙 <a href="https://github.com/QMS85" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> GitHub Profile</a></p>
                <p></p>
                <p><strong>Social Media:</strong></p>
                <p>🐦 <a href="https://twitter.com/DJJonnas85" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-x-twitter"></i> X (Twitter)</a></p>
                <p>📘 <a href="https://facebook.com/2jonathanpeters" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook"></i> Facebook</a></p>
                <p></p>
                <p><strong>Open to:</strong></p>
                <ul>
                    <li>Freelance Web Development Projects</li>
                    <li>Contract Frontend Development Work</li>
                    <li>Full-time Developer Positions</li>
                    <li>Collaboration & Partnership Opportunities</li>
                    <li>Technical Consultations</li>
                </ul>
                <p>Let's connect and build something amazing! 🚀</p>
            </div>
        `;
    }

    /**
     * Fetch GitHub stats (async)
     */
    fetchGitHubStats() {
        return new Promise((resolve, reject) => {
            fetch('https://api.github.com/users/QMS85')
                .then(response => {
                    if (!response.ok) throw new Error('Failed to fetch GitHub data');
                    return response.json();
                })
                .then(data => {
                    const html = `
                        <div class="term-card">
                            <h4 class="cyan-text">🐙 GITHUB STATISTICS</h4>
                            <p><strong>Username:</strong> <a href="https://github.com/QMS85" target="_blank">@QMS85</a></p>
                            <p><strong>Public Repositories:</strong> <span class="green-text">${data.public_repos}</span></p>
                            <p><strong>Public Gists:</strong> <span class="green-text">${data.public_gists}</span></p>
                            <p><strong>Followers:</strong> <span class="green-text">${data.followers}</span></p>
                            <p><strong>Following:</strong> <span class="green-text">${data.following}</span></p>
                            <p><strong>Account Created:</strong> ${new Date(data.created_at).toLocaleDateString()}</p>
                            <p><strong>Last Updated:</strong> ${new Date(data.updated_at).toLocaleDateString()}</p>
                            <p><a href="https://github.com/QMS85?tab=repositories" target="_blank">📂 View all repositories →</a></p>
                        </div>
                    `;
                    resolve(html);
                })
                .catch(error => {
                    reject(new Error('Unable to fetch GitHub data. Please try again later.'));
                });
        });
    }

    /**
     * Get command history text
     */
    getHistoryText() {
        if (!this.commandHistory || this.commandHistory.length === 0) {
            return '<p class="text-dim">No command history yet. Start typing commands!</p>';
        }

        const historyHTML = `
            <div class="term-card">
                <h4 class="magenta-text">📜 COMMAND HISTORY (Last 20)</h4>
                <ol reversed>
                    ${this.commandHistory
                        .slice(0, 20)
                        .map((cmd, i) => `<li>${this.escapeHtml(cmd)}</li>`)
                        .join('')}
                </ol>
                <p><em>Total commands executed: ${this.commandHistory.length}</em></p>
            </div>
        `;
        return historyHTML;
    }

    /**
     * Download CV functionality
     */
    downloadCV() {
        // Create a sample CV PDF using a data URL or link to actual CV
        // For production, replace this with actual CV file hosting
        const cvUrl = 'https://github.com/QMS85/v1-CLI-Terminal-Portfolio/raw/main/Jonathan_Peters_CV.pdf';
        
        // Try to download, if file doesn't exist, show message
        fetch(cvUrl, { method: 'HEAD' })
            .then(() => {
                const link = document.getElementById('cvDownloadLink');
                link.href = cvUrl;
                link.click();
                this.showToast('✓ CV downloaded successfully!', 'success');
                this.trackEvent('cv_downloaded', { timestamp: new Date().toISOString() });
            })
            .catch(() => {
                // If CV not available, show message
                const html = `
                    <div class="term-card">
                        <h4 class="cyan-text">📄 CV DOWNLOAD</h4>
                        <p><strong>Status:</strong> <span style="color:#ffbd2e">CV file is currently being prepared.</span></p>
                        <p>Please contact me directly for my CV: <a href="mailto:jonathanpeters051@gmail.com">jonathanpeters051@gmail.com</a></p>
                        <p><strong>Alternative:</strong> View my professional profile on <a href="https://linkedin.com/in/2jonathanpeters" target="_blank">LinkedIn</a></p>
                    </div>
                `;
                this.displayResponse(html);
                this.trackEvent('cv_requested', { status: 'not_available' });
            });

        return `<span class="green-text">Processing CV download...</span>`;
    }

    /**
     * Start updating clock
     */
    startClock() {
        const updateClock = () => {
            const timeElem = document.getElementById('sysTime');
            if (timeElem) {
                const now = new Date();
                const time = now.toLocaleTimeString('en-ZA', { timeZone: 'Africa/Johannesburg' });
                timeElem.textContent = time + ' SAST';
            }
        };

        updateClock();
        setInterval(updateClock, 1000);
    }

    /**
     * Update current date display
     */
    updateDateTime() {
        if (this.currentDateElem) {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                timeZone: 'Africa/Johannesburg'
            };
            const dateStr = now.toLocaleDateString('en-ZA', options);
            this.currentDateElem.textContent = dateStr;
        }
    }

    /**
     * Detect and display user timezone
     */
    detectTimezone() {
        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (this.currentTimezoneElem) {
                this.currentTimezoneElem.textContent = timezone;
            }
        } catch (error) {
            console.error('Timezone detection error:', error);
            if (this.currentTimezoneElem) {
                this.currentTimezoneElem.textContent = 'Unable to detect';
            }
        }
    }

    /**
     * Toggle theme (dark/light)
     */
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        const html = document.documentElement;
        
        if (this.isDarkMode) {
            html.classList.remove('light-theme');
            this.themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            if (this.themeLabel) this.themeLabel.textContent = 'Dark Mode';
        } else {
            html.classList.add('light-theme');
            this.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            if (this.themeLabel) this.themeLabel.textContent = 'Light Mode';
        }
        
        localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
        this.showToast(`${this.isDarkMode ? '🌙 Dark' : '☀️ Light'} mode activated`, 'info');
        this.trackEvent('theme_changed', { theme: this.isDarkMode ? 'dark' : 'light' });
    }

    /**
     * Initialize theme from localStorage
     */
    initializeTheme() {
        const saved = localStorage.getItem('isDarkMode');
        if (saved !== null) {
            this.isDarkMode = JSON.parse(saved);
            if (!this.isDarkMode) {
                document.documentElement.classList.add('light-theme');
                this.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
                if (this.themeLabel) this.themeLabel.textContent = 'Light Mode';
            }
        }
    }

    /**
     * Show loading indicator
     */
    showLoading(show) {
        if (show) {
            this.loadingIndicator.classList.add('active');
        } else {
            this.loadingIndicator.classList.remove('active');
        }
    }

    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        
        this.toastContainer.appendChild(toast);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /**
     * Save state to localStorage
     */
    saveState() {
        try {
            localStorage.setItem('terminalHistory', JSON.stringify(this.commandHistory));
            localStorage.setItem('terminalOutput', this.output.innerHTML);
        } catch (error) {
            console.warn('Could not save state:', error);
        }
    }

    /**
     * Load state from localStorage
     */
    loadState() {
        try {
            const saved = localStorage.getItem('terminalHistory');
            if (saved) {
                this.commandHistory = JSON.parse(saved);
            }
            // Note: We don't restore output to give clean start
        } catch (error) {
            console.warn('Could not load state:', error);
        }
    }

    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(unsafe) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return unsafe.replace(/[&<>"']/g, char => map[char]);
    }

    /**
     * Track analytics event
     */
    trackEvent(eventName, eventData = {}) {
        // Google Analytics tracking (if gtag is available)
        if (typeof gtag !== 'undefined') {
            try {
                gtag('event', eventName, eventData);
            } catch (error) {
                console.warn('Analytics tracking failed:', error);
            }
        }

        // Console log for debugging
        console.log(`[Analytics] ${eventName}`, eventData);
    }
}

/**
 * Initialize application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = new TerminalPortfolio();
    
    // Make app globally accessible for debugging
    window.portfolioApp = app;
    
    console.log('%c🚀 CLI Terminal Portfolio Loaded!', 'font-size: 16px; color: #3fb950; font-weight: bold;');
    console.log('%cDeveloper: Jonathan Peters', 'font-size: 12px; color: #58a6ff;');
    console.log('%cGitHub: https://github.com/QMS85', 'font-size: 12px; color: #39c5cf;');
});

/**
 * Handle errors gracefully
 */
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
