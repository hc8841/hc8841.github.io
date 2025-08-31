const terminalOutput = document.getElementById('terminal-output');

let language = 'en';

// Comandos em inglês
const commandsEn = {
  help: `
Available commands:
  about        - Info about me
  skills       - My tech stack
  projects     - Link to GitHub projects
  contact      - Contact information
  clear        - Clear the terminal
  exit         - Close the terminal (not really)
  lang         - Change language (usage: lang pt/en)
  `,

  about: `
I'm Henrique (hc8841), 19 y.o.
Autistic (level 1), Savant syndrome (under evaluation).
Radio operator (PU5HEF), low-level dev & microcontroller addict.
Also a philosophy nerd: Nietzsche & Schopenhauer.
Fluent in English.
  `,

  skills: `
Languages & Tools:
- C, C++, Python, Assembly (basic)
- Java (PC & Android), Kotlin
- HTML, CSS, JavaScript
- Arduino, Linux, cybersecurity basics
  `,

  projects: `
Check out my GitHub projects here:
https://github.com/hc8841?tab=repositories
  `,

  contact: `
Primary email: henriquemattos841@gmail.com
Alt email:     henriquepu5hef@gmail.com
Phone (main):  +55 47 99673-6277
Phone (alt):   +55 47 99606-1835
  `,

  exit: `Nice try. But this terminal never sleeps.`,

  lang: `Language changed to English.`,
};

// Comandos em português
const commandsPt = {
  help: `
Comandos disponíveis:
  about        - Sobre mim
  skills       - Minhas habilidades
  projects     - Link para meus projetos no GitHub
  contact      - Contato
  clear        - Limpar terminal
  exit         - Sair do terminal (não realmente)
  lang         - Mudar idioma (uso: lang pt/en)
  `,

  about: `
Sou Henrique (hc8841), 19 anos.
Autista (nível 1), Síndrome de Savant (em investigação).
Radioamador (PU5HEF), apaixonado por microcontroladores e dev de baixo nível.
Amante de filosofia: Nietzsche & Schopenhauer.
Falo inglês fluente.
  `,

  skills: `
Linguagens & Ferramentas:
- C, C++, Python, Assembly (básico)
- Java (PC & Android), Kotlin
- HTML, CSS, JavaScript
- Arduino, Linux, noções de cibersegurança
  `,

  projects: `
Confira meus projetos no GitHub:
https://github.com/hc8841?tab=repositories
  `,

  contact: `
Email principal: henriquemattos841@gmail.com
Email alternativo: henriquepu5hef@gmail.com
Telefone (principal): +55 47 99673-6277
Telefone (alternativo): +55 47 99606-1835
  `,

  exit: `Boa tentativa. Mas este terminal nunca dorme.`,

  lang: `Idioma alterado para Português.`,
};

// Função pra pegar o objeto de comandos atual conforme idioma
function getCommands() {
  return language === 'en' ? commandsEn : commandsPt;
}

// Função para criar o prompt + input alinhados e setar listener no input
function printPrompt() {
  terminalOutput.insertAdjacentHTML('beforeend', `
    <div id="terminal-line" style="display: flex; align-items: center; gap: 0.3rem; margin: 0.2rem 0;">
      <span class="prompt" style="font-family: 'Courier New', Courier, monospace; font-size: 16px; color: #4cc9f0;">hc8841@portfolio:~$</span>
      <input id="terminal-input" autocomplete="off" autofocus style="font-family: 'Courier New', Courier, monospace; font-size: 16px; background: transparent; border: none; color: #4cc9f0; outline: none; flex: 1;" />
    </div>
  `);

  const terminalInput = document.getElementById('terminal-input');
  terminalInput.focus();

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const inputRaw = terminalInput.value.trim();
      const input = inputRaw.toLowerCase();
      // Remove input line so user cannot edit
      terminalInput.disabled = true;
      terminalInput.style.color = '#888'; // deixa cinza pra parecer 'finalizado'

      if (input === 'clear') {
        terminalOutput.innerHTML = '';
        printPrompt();
        return;
      }

      if (input.startsWith('lang ')) {
        const langArg = input.split(' ')[1];
        if (langArg === 'en' || langArg === 'pt') {
          language = langArg;
          terminalOutput.insertAdjacentHTML('beforeend', `<p>${getCommands().lang}</p>`);
        } else {
          terminalOutput.insertAdjacentHTML('beforeend', `<p>Invalid language. Use "lang pt" or "lang en".</p>`);
        }
        printPrompt();
        return;
      }

      if (input.startsWith('sudo')) {
        terminalOutput.insertAdjacentHTML('beforeend', `<p>Permission denied: You are not the superuser.</p>`);
        printPrompt();
        return;
      }

      const commands = getCommands();

      if (commands[input]) {
        terminalOutput.insertAdjacentHTML('beforeend', `<p>${commands[input].trim()}</p>`);
      } else {
        terminalOutput.insertAdjacentHTML('beforeend', `<p>'${inputRaw}' is not recognized. Type 'help'.</p>`);
      }

      printPrompt();
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });
}

// Inicializa o terminal
terminalOutput.innerHTML = `<p>Welcome! Type 'help' (or 'lang pt' para português) to get started.</p>`;
printPrompt();
