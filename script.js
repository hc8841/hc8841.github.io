const typedText = document.getElementById('typed');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

let language = 'en';

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

function getCommands() {
  return language === 'en' ? commandsEn : commandsPt;
}

function printPrompt() {
  terminalOutput.innerHTML += `<p class="prompt">hc8841@portfolio:~$ <span id="typed"></span></p>`;
  terminalInput.focus();
}

terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const inputRaw = terminalInput.value.trim();
    const input = inputRaw.toLowerCase();
    terminalInput.value = '';

    // Print command with prompt
    terminalOutput.innerHTML += `<p class="prompt">hc8841@portfolio:~$ ${inputRaw}</p>`;

    if (input === 'clear') {
      terminalOutput.innerHTML = '';
      printPrompt();
      return;
    }

    if (input.startsWith('lang ')) {
      const langArg = input.split(' ')[1];
      if (langArg === 'en' || langArg === 'pt') {
        language = langArg;
        terminalOutput.innerHTML += `<p>${getCommands().lang}</p>`;
      } else {
        terminalOutput.innerHTML += `<p>Invalid language. Use "lang pt" or "lang en".</p>`;
      }
      printPrompt();
      return;
    }

    // Easter egg: sudo command
    if (input.startsWith('sudo')) {
      terminalOutput.innerHTML += `<p>Permission denied: You are not the superuser.</p>`;
      printPrompt();
      return;
    }

    const commands = getCommands();

    if (commands[input]) {
      terminalOutput.innerHTML += `<p>${commands[input].trim()}</p>`;
    } else {
      terminalOutput.innerHTML += `<p>'${inputRaw}' is not recognized. Type 'help'.</p>`;
    }

    printPrompt();
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});

// Inicializa terminal com prompt e mensagem de boas vindas
terminalOutput.innerHTML = `<p>Welcome! Type 'help' (or 'lang pt' para português) to get started.</p>`;
printPrompt();
