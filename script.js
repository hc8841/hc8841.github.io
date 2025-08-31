const typedText = document.getElementById('typed');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

const commands = {
  help: `
Available commands:
  about        - Info about me
  skills       - My tech stack
  projects     - Recent projects from GitHub
  contact      - Contact information
  clear        - Clear the terminal
  exit         - Close the terminal (not really)
  `,

  about: `
I’m Henrique (hc8841), 19 y.o.
Autistic (level 1), Savant syndrome (under evaluation).
Radio operator (PU5HEF), tech enthusiast, low-level & embedded dev.
Lover of philosophy: Nietzsche, Schopenhauer.
Fluent in English.
  `,

  skills: `
C, C++, Python, Kotlin, Java (desktop & Android),
Assembly (basic), JavaScript, HTML, CSS, Arduino,
Basic cybersecurity, Linux systems, custom kernels.
  `,

  projects: `Fetching projects from GitHub...`,
  
  contact: `
Primary email: henriquemattos841@gmail.com
Alt email:     henriquepu5hef@gmail.com
Phone (main):  +55 47 99673-6277
Phone (alt):   +55 47 99606-1835
  `,

  exit: `Nice try. But this terminal never sleeps.`,
};

terminalInput.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const input = terminalInput.value.trim().toLowerCase();
    terminalInput.value = '';
    
    terminalOutput.innerHTML += `\nhc8841@portfolio:~$ ${input}\n`;

    if (input === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    if (commands[input]) {
      if (input === 'projects') {
        const res = await fetch('github.php');
        const repos = await res.json();
        let output = repos.map(r => `- ${r.name}: ${r.description || 'No description'}`).join('\n');
        terminalOutput.innerHTML += output + '\n';
      } else {
        terminalOutput.innerHTML += commands[input] + '\n';
      }
    } else {
      terminalOutput.innerHTML += `'${input}' is not recognized. Type 'help'.\n`;
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});

// Optional: welcome effect
let welcome = "Type 'help' to get started";
let i = 0;
function type() {
  if (i < welcome.length) {
    typedText.innerHTML += welcome.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();
