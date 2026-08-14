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
          - <span class="cyan-text">projects</span> : Highlighted engineering projects<br>
          - <span class="cyan-text">certs</span>    : freeCodeCamp & BitDegree certifications<br>
          - <span class="cyan-text">contact</span>  : Initialize interactive transmission terminal<br>
          - <span class="cyan-text">clear</span>    : Reset the terminal screen
        </div>`,
      bio: `
        <div class="term-card">
          <h4 class="blue-text">DEVELOPER DOSSIER: JONATHAN PETERS</h4>
          <p>3+ years of experience constructing accessible, high-performance web applications.</p>
          <p>Currently expanding capabilities into Node.js, Express, Python, and dynamic AI-powered APIs.</p>
        </div>`,
      skills: `
      <div class="term-card">
        <h4 class="green-text">TECHNICAL CAPABILITIES</h4>
        <p><strong>Front-End:</strong> HTML5, CSS3/SASS, JavaScript (ES6+), React.js, Responsive Web Design</p>
        <p><strong>Back-End:</strong> Node.js, Express.js, Python, REST APIs, Security Middleware (Helmet)</p>
        <p><strong>Tools:</strong> Git, GitHub, CLI Workflows, npm scripts</p>
      </div>`,
    projects: `
      <div class="term-card">
        <h4 class="magenta-text">DEPLOYED PROJECTS</h4>
        <p>1. <strong>Logistics Command Center:</strong> Multi-device dispatch & route UI.</p>
        <p>2. <strong>gkroon-cli Engine:</strong> Node.js workflow scaffolding & Git automation tool.</p>
      </div>`,
    certs: `
      <div class="term-card">
        <h4 class="cyan-text">VERIFIED CERTIFICATIONS</h4>
        <p>✔ freeCodeCamp: Responsive Web Design</p>
        <p>✔ freeCodeCamp: JavaScript Algorithms & Data Structures</p>
        <p>✔ freeCodeCamp: Front End Development Libraries</p>
        <p>✔ freeCodeCamp: Data Visualizations</p>
        <p>✔ BitDegree: Front End Development</p>
      </div>`,
    contact: `
      <div class="term-card">
        <h4 class="green-text">TRANSMISSION TERMINAL</h4>
        <form id="termContactForm" class="term-form">
          <input type="text" id="tName" placeholder="Your Name" required>
          <input type="email" id="tEmail" placeholder="Your Email" required>
          <input type="text" id="tSubject" placeholder="Subject" required>
          <textarea id="tMessage" rows="3" placeholder="Message Payload" required></textarea>
          <button type="submit" class="term-btn">TRANSMIT</button>
        </form>
        <div id="tStatus" style="margin-top:10px;"></div>
      </div>`
  };
  function executeCommand(cmd) {
    const cleanCmd = cmd.trim().toLowerCase();
    // Add command line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-line prompt-intro';
    cmdLine.innerHTML = `<span class="green-text">jpeters@ai-terminal</span>:<span class="blue-text">~</span>$ ${cleanCmd}`;
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
      response.innerHTML = `<span style="color:#ff5f56">Command not recognized: '${cleanCmd}'. Type <span class="cyan-text">'help'</span> for list.</span>`;
    }
    terminalOutput.appendChild(response);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    if (cleanCmd === 'contact') {
      attachFormListener();
    }
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

function attachFormListener() {
    const form = document.getElementById('termContactForm');
    const status = document.getElementById('tStatus');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        status.style.color = '#39c5cf';
        status.textContent = 'Transmitting to backend...';
        const payload = {
          name: document.getElementById('tName').value,
          email: document.getElementById('tEmail').value,
          subject: document.getElementById('tSubject').value,
          message: document.getElementById('tMessage').value
        };
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (res.ok && data.success) {
          status.style.color = '#3fb950';
          status.textContent = data.message;
          form.reset();
        } else {
          status.style.color = '#ff5f56';
          status.textContent = data.errors ? data.errors[0].msg : data.message;
        }
      } catch (err) {
        status.style.color = '#ff5f56';
        status.textContent = 'Network communication failure.';
      }
    });
  }
}
});
