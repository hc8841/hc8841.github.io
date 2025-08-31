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
I'm Henrique (hc8841), 19 y.o.
Autistic (level 1), Savant syndrome (under evaluation).
Radio operator (PU5HEF), low-level dev & microcontroller addict.
Also a philosophy nerd: Nietzsche & Schopenhauer.
(NOT 100%) Fluent in English.
  `,

  skills: `
Languages & Tools:
- C, C++, Python, Assembly (basic)
- Java (PC & Android), Kotlin
- HTML, CSS, JavaScript
- Arduino, Linux, cybersecurity basics
  `,

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
        terminalOutput.innerHTML += "Fetching projects from GitHub...\n";
        try {
          const res = await fetch('https://api.github.com/users/hc8841/repos?sort=updated&per_page=5');
          const repos = await res.json();
          let output = repos.map(r => `- ${r.name}: ${r.description || 'No description'}`).join('\n');
          terminalOutput.innerHTML += output + '\n';
        } catch (err) {
          terminalOutput.innerHTML += 'Error fetching projects.\n';
        }
      } else {
        terminalOutput.innerHTML += commands[input] + '\n';
      }
    } else {
      terminalOutput.innerHTML += `'${input}' is not recognized. Type 'help'.\n`;
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});

// Type welcome message
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
