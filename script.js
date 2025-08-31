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

function appendOutput(text) {
  const p = document.createElement('p');
  p.textContent = text.trim();
  terminalOutput.appendChild(p);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function printPrompt() {
  // Cria container flex
  const lineDiv = document.createElement('div');
  lineDiv.style.display = 'flex';
  lineDiv.style.alignItems = 'center';
  lineDiv.style.gap = '0.3rem';
  lineDiv.style.margin = '0.2rem 0';

  // Cria span do prompt
  const promptSpan = document.createElement('span');
  promptSpan.textContent = 'hc8841@portfolio:~$';
  promptSpan.style.fontFamily = "'Courier New', Courier, monospace";
  promptSpan.style.fontSize = '16px';
  promptSpan.style.color = '#4cc9f0';

  // Cria input
  const input = document.createElement('input');
  input.type = 'text';
  input.autocomplete = 'off';
  input.autofocus = true;
  input.style.fontFamily = "'Courier New', Courier, monospace";
  input.style.fontSize = '16px';
  input.style.background = 'transparent';
  input.style.border = 'none';
  input.style.color = '#4cc9f0';
  input.style.outline = 'none';
  input.style.flex = '1';

  lineDiv.appendChild(promptSpan);
  lineDiv.appendChild(input);

  terminalOutput.appendChild(lineDiv);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;

  input.focus();

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const inputRaw = input.value.trim();
      const inputValue = inputRaw.toLowerCase();

      // Desabilita input e deixa cinza para parecer "finalizado"
      input.disabled = true;
      input.style.color = '#888';

      if (inputValue === 'clear') {
        terminalOutput.innerHTML = '';
        printPrompt();
        return;
      }

      if (inputValue.startsWith('lang ')) {
        const langArg = inputValue.split(' ')[1];
        if (langArg === 'en' || langArg === 'pt') {
          language = langArg;
          appendOutput(getCommands().lang);
        } else {
          appendOutput(language === 'en' ? 'Invalid language. Use "lang pt" or "lang en".' : 'Idioma inválido. Use "lang pt" ou "lang en".');
        }
        printPrompt();
        return;
      }

      if (inputValue.startsWith('sudo')) {
        appendOutput(language === 'en' ? 'Permission denied: You are not the superuser.' : 'Permissão negada: Você não é o superusuário.');
        printPrompt();
        return;
      }

      const commands = getCommands();

      if (commands[inputValue]) {
        appendOutput(commands[inputValue]);
      } else {
        appendOutput(language === 'en' ? `'${inputRaw}' is not recognized. Type 'help'.` : `'${inputRaw}' não é um comando válido. Digite 'help'.`);
      }

      printPrompt();
    }
  });
}

// Inicializa
appendOutput(language === 'en' ? "Welcome! Type 'help' (or 'lang pt' para português) to get started." : "Bem-vindo! Digite 'help' (ou 'lang en' para inglês) para começar.");
printPrompt();
