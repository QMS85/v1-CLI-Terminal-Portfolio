document.addEventListener('DOMContentLoaded', () => {
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalInput = document.getElementById('terminalInput');
  const cmdLinks = document.querySelectorAll('.cmd-link');

  // Clock
  setInterval(() => {
    const timeElem = document.getElementById('sysTime');
    if (timeElem) timeElem.textContent = new Date().toLocaleTimeString() + ' SAST';
  }, 1000);

  const COMMANDS = {
    help: `
      <div class="term-card">
        <strong>AVAILABLE SYSTEM COMMANDS:</strong><br>
        - <span class="cyan-text">bio</span>      : Developer profile & background<br>
        - <span class="cyan-text">skills</span>   : Tech stack breakdown<br>
        - <span class="cyan-text">projects</span> : Highlighted projects<br>
        - <span class="cyan-text">certs</span>    : freeCodeCamp Certifications<br>
        - <span class="cyan-text">contact</span>  : Contact details & social links<br>
        - <span class="cyan-text">clear</span>    : Reset the terminal screen
      </div>`,

    bio: `
      <div class="term-card">
        <h4 class="blue-text">FRONT END WEB DEVELOPER DOSSIER: JONATHAN PETERS</h4>
        <p>4+ years building accessible, responsive, high-performance web interfaces from design to production.</p>
        <p>Currently expanding skills in Node.js, TypeScript, and modern web tooling.</p>
        <p>Contact: <a href="mailto:jonathanpeters051@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i> Send An Email</a></p>
        <p>Social: <a href="https://www.linkedin.com/in/2jonathanpeters" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a> 
        • <a href="https://www.facebook.com/2jonathanpeters" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i> Facebook</a> 
        • <a href="https://www.twitter.com/DJJonnas85" target="_blank" rel="noopener noreferrer"><i class="fab fa-x-twitter"></i> X</a></p>
      </div>`,

    skills: `
      <div class="term-card">
        <h4 class="green-text">TECHNICAL CAPABILITIES</h4>
        <p><strong>Languages> HTML5, CSS3, JavaScript (ES6+), Node JS, Python, TypeScript, Jquery, Bootstrap</p>
        <p><strong>Tools:</strong> Git, GitHub CLI, VS Code </p>
        <p><strong>A.I Tools: Github Co-Pilot, Microsoft Co-Pilot, Google Gemini, Groq, Replit, Base 44, 
        <p><strong>Also:</strong> Familiarity with Node.js, Express and deployment workflows</p>
      </div>`,

    projects: `
      <div class="term-card">
        <h4 class="magenta-text">SELECTED DEPLOYED PROJECTS</h4>
        <ol>
          <li><a href="https://gem-jumper-f4f91f18.base44.app/" target="_blank" rel="noopener noreferrer">Gem-Jumper — Platform Game</a></li>

          <!-- 10 Figma-design projects -->
          <li><a href="https://qms85.github.io/JobListings/" target="_blank" rel="noopener noreferrer">Job Listings (Figma → HTML)</a></li>
          <li><a href="https://qms85.github.io/ProductListWithCart/" target="_blank" rel="noopener noreferrer">Product List With Cart (Figma → HTML)</a></li>
          <li><a href="https://qms85.github.io/EasyBankLandingPage/" target="_blank" rel="noopener noreferrer">EasyBank (Figma → HTML)</a></li>
          <li><a href="https://qms85.github.io/IPAddressTracker/" target="_blank" rel="noopener noreferrer">IP Address Tracker (Figma → HTML)</a></li>
          <li><a href="https://qms85.github.io/SocialLinks/" target="_blank" rel="noopener noreferrer">Social Links Profile (Figma → HTML)</a></li>
          <li><a href="https://qms85.github.io/QRCode/" target="_blank" rel="noopener noreferrer">QR Code (Figma → HTML)</a></li>
          <li><a href="https://qms85.github.io/BlogPreviewCard/" target="_blank" rel="noopener noreferrer">Blog Preview Card (Figma → HTML)</a></li>
          <li><a href="https://qms85.github.io/ProductPreviewCardComponent/" target="_blank" rel="noopener noreferrer">Product Preview Card (Figma → HTML)</a></li>
          <li><a href="https://qms85.github.io/Rock-Paper-Scissors-Game/" target="_blank" rel="noopener noreferrer">Rock Paper Scissors (Figma → HTML)</a></li>
          <li><a href="https://qms85.github.io/Multi-Step-Form/" target="_blank" rel="noopener noreferrer">Multi Step Form (Figma → HTML)</a></li>

          <!-- Additional projects -->
          <li><a href="https://qms85.github.io/DragMeAroundTheScreen/" target="_blank" rel="noopener noreferrer">Drag Me</a></li>
          <li><a href="https://qms85.github.io/TimeCheck/" target="_blank" rel="noopener noreferrer">Multi Time Zone Clock</a></li>
          <li><a href="https://qms85.github.io/CryptoTrackerPro/" target="_blank" rel="noopener noreferrer">Crypto Tracker App</a></li>
          <li><a href="https://entrepreneurship-withreplit.streamlit.app/" target="_blank" rel="noopener noreferrer">Entrepreneurship (Streamlit)</a></li>
          <li><a href="https://gkroon-web.github.io/Investment-Calculator/" target="_blank" rel="noopener noreferrer">GKroon Investment Calculator</a></li>
          <li><a href="https://qms85.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">GKroon Password Generator</a></li>
          <li><a href="https://g-kroon.github.io/GKroon/" target="_blank" rel="noopener noreferrer">GKroon (Pty) Ltd</a></li>
          <li><a href="https://digitaldividerecords-pty-ltd.github.io/DigitalDivideRecords/" target="_blank" rel="noopener noreferrer">Digital Divide Records</a></li>
          <li><a href="https://qms85.github.io/Github-User-Search/" target="_blank" rel="noopener noreferrer">Github User Search</a></li>
          <li><a href="https://qms85.github.io/MusicPlayer/" target="_blank" rel="noopener noreferrer">Music Player</a></li>
          <li><a href="https://qms85.github.io/MemeGenerator/" target="_blank" rel="noopener noreferrer">Meme Generator</a></li>
          <li><a href="https://digitaldividerecords-pty-ltd.github.io/SampleArtistEPK/" target="_blank" rel="noopener noreferrer">Sample Artist EPK</a></li>
          <li><a href="https://gkroon-web.github.io/RectangleRun/" target="_blank" rel="noopener noreferrer">Rectangular Run</a></li>
          <li><a href="https://qms85.github.io/GitHubCalculator/" target="_blank" rel="noopener noreferrer">Simple Calculator</a></li>
          <li><a href="https://qms85.github.io/SnakeGame2025/" target="_blank" rel="noopener noreferrer">Funky Snake Game</a></li>
        </ol>
        <p><em>See more public repositories on my GitHub: <a href="https://github.com/QMS85?tab=repositories" target="_blank" rel="noopener noreferrer">QMS85 repositories</a></em></p>
      </div>`,

    certs: `
      <div class="term-card">
        <h4 class="cyan-text">VERIFIED CERTIFICATIONS (freeCodeCamp)</h4>
        <p>✔ <a href="https://www.freecodecamp.org/certification/jonathan_peters/responsive-web-design-v9" target="_blank" rel="noopener noreferrer">Responsive Web Design</a></p>
        <p>✔ <a href="https://www.freecodecamp.org/certification/Jonathan_Peters/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer">JavaScript Algorithms & Data Structures</a></p>
        <p>✔ <a href="https://www.freecodecamp.org/certification/Jonathan_Peters/front-end-development-libraries" target="_blank" rel="noopener noreferrer">Front End Development Libraries</a></p>
        <p>✔ <a href="https://www.freecodecamp.org/certification/Jonathan_Peters/data-visualization" target="_blank" rel="noopener noreferrer">Data Visualization</a></p>
      </div>`,

    contact: `
      <div class="term-card">
        <h4 class="green-text">CONTACT</h4>
        <p><a href="mailto:jonathanpeters051@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i> Send An Email</a></p>
        <p><a href="https://www.linkedin.com/in/2jonathanpeters" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> Connect On LinkedIn</a></p>
        <p><a href="https://www.facebook.com/2jonathanpeters" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i> Follow On Facebook</a></p>
      </div>`
  };

  function executeCommand(cmd) {
    const cleanCmd = cmd.trim().toLowerCase();
    // Add command line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-line prompt-intro';
    cmdLine.innerHTML = `<span class="green-text">enter code@cli-terminal</span>:<span class="blue-text">~</span>$ ${escapeHtml(cleanCmd)}`;
    terminalOutput.appendChild(cmdLine);

    if (cleanCmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    const response = document.createElement('div');
    response.className = 'term-line response';
    if (COMMANDS[cleanCmd]) {
      response.innerHTML = COMMANDS[cleanCmd];
    } else {
      response.innerHTML = `<span style="color:#ff5f56">Command not recognized: '${escapeHtml(cleanCmd)}'. Type <span class="cyan-text">'help'</span> for list.</span>`;
    }
    terminalOutput.appendChild(response);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      if (val) {
        executeCommand(val);
        terminalInput.value = '';
      }
    }
  });

  cmdLinks.forEach(link => {
    link.addEventListener('click', () => {
      cmdLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      executeCommand(link.dataset.cmd);
    });
  });

  // Simple HTML escaper for safety
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

});
