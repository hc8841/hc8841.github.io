// =======================================================
// HenriqueOS v2.1
// Configuração inicial
// =======================================================

const terminal = document.getElementById("terminal");
const favicon = document.getElementById("favicon");

let sudoMode = false;

// Hora do boot (para uptime)
const bootTime = Date.now();

// Histórico persistente
let history =
    JSON.parse(localStorage.getItem("history")) || [];

let historyIndex = history.length;

// Cálculo automático da idade
const birthDate = new Date("2006-03-09");

const age = Math.floor(
    (Date.now() - birthDate.getTime()) / 31557600000
);

// =======================================================
// Arquivos virtuais
// =======================================================

const files = {

    "readme.txt":
`HenriqueOS v2.1.0-stable

Foco em Low Level, Linux e Engenharia Reversa.`,

    "kernel_panic.log":
`Error: User is too curious.

System stable anyway.`,

    "todo.md":
`- [ ] Finalizar projeto em C
- [ ] Estudar Assembly x86_64
- [ ] Customizar kernel do Arch`,

    "coffee.conf":
`coffee=true
productivity=maximum`,

    "arch.conf":
`I use Arch, btw.`,

    "motd":
`Bem-vindo ao HenriqueOS v2.1.`

};

// =======================================================
// Projetos
// =======================================================

const projects = [

    {
        name: "Projetos GitHub",
        link: "https://github.com/hc8841",
        desc: "Repositórios de código e estudos."
    },

    {
        name: "Certificados",
        link: "https://drive.google.com/drive/folders/1k7mJwBy7egEE-h_HCGNXxc6mR8M9QGmY",
        desc: "Formação técnica e cursos."
    }

];

// =======================================================
// Frases do comando fortune
// =======================================================

const fortunes = [

    "Segmentation fault (core dumped).",

    "Nunca execute rm -rf / em produção.",

    "There is no place like 127.0.0.1.",

    "Kernel panic? Desliga e liga de novo.",

    "Compila na minha máquina.",

    "O problema está entre a cadeira e o teclado.",
// =======================================================
// Respostas dos comandos
// =======================================================

const responses = {

    help: () => `
Comandos disponíveis:

about        - Sobre mim
skills       - Capacidades técnicas
projects     - Projetos e links
experience   - Experiência profissional
contact      - Contato

neofetch     - Informações do sistema
whoami       - Usuário atual
uname        - Informações do kernel
pwd          - Diretório atual
date         - Data e hora
uptime       - Tempo de atividade

ls           - Listar arquivos
cat <arquivo> - Ler arquivo

history      - Histórico de comandos
fortune      - Frase aleatória
coffee       - Reabastecer energia
pacman       - Instalar café

sudo         - Obter privilégios root
clear        - Limpar tela
exit         - Encerrar sessão
`,

    // ===================================================

    about: () => `
Nome: Henrique Eslabão da Fonseca Chaves
Idade: ${age} anos
Local: São Bento do Sul, SC

Formação:
- Técnico em Informática (2023)

Interesses:
- Linux
- Segurança da Informação
- Infraestrutura
- Programação em C
- Assembly
- Engenharia Reversa

Objetivo:

Construir carreira em infraestrutura,
segurança e desenvolvimento de baixo nível.
`,

    // ===================================================

    skills: () => `
[Hardware]

- Manutenção avançada
- Eletrônica básica
- Montagem de servidores
- Infraestrutura local

[Software]

Linguagens:

- C
- Python
- Assembly

Sistemas:

- Arch Linux (uso diário)
- Windows Server

Ferramentas:

- Git
- Bash Scripting
- Virtualização
- Ferramentas de pesquisa em segurança

[Soft Skills]

- Comunicação clara
- Raciocínio analítico
- Liderança técnica
`,

    // ===================================================

    experience: () => `
Experiência Profissional

- Condor S/A
  Ajudante de carga

- Raia Drogasil
  Atendente

- SDB Alimentos
  Caixa

Essas experiências contribuíram para o desenvolvimento de:

- Disciplina
- Organização
- Responsabilidade
- Trabalho em equipe
`,

    // ===================================================

    contact: () => `
Email:

<a href="mailto:henriquemattos841@gmail.com">
henriquemattos841@gmail.com
</a>

GitHub:

<a href="https://github.com/hc8841" target="_blank">
github.com/hc8841
</a>

LinkedIn:

<a href="https://linkedin.com/in/henrique-chaves-448288300"
target="_blank">
linkedin.com/in/henrique-chaves-448288300
</a>
`,

    // ===================================================

    projects: () => {

        let output = "Projetos e Links:\n\n";

        projects.forEach(project => {

            output +=
`- <a href="${project.link}" target="_blank">${project.name}</a>

${project.desc}

`;

        });

        return output;

    },

    // ===================================================

    neofetch: () => `
<div class="ascii-art">
 _    _                _             _      ____   _____
| |  | |              (_)           | |    / __ \\ / ____|
| |__| | ___ _ __  _ __ _  __ _ _   _  ___| |  | | (___
|  __  |/ _ \\ '_ \\| '__| |/ _\` | | | |/ _ \\ |  | |\\___ \\
| |  | |  __/ | | | |  | | (_| | |_| |  __/ |__| |____) |
|_|  |_|\\___|_| |_|_|  |_|\\__, |\\__,_|\\___|\\____/|_____/
                           __/ |
                          |___/
</div>

OS: HenriqueOS v2.1
Kernel: 6.x-zen-custom
Shell: henrique-bash

CPU: Curiosity @ 4.0GHz
Memory: Coffee-driven 32GB

Editor: Vim
Status: Operational
`,

    // ===================================================

    whoami: () =>
        sudoMode ? "root" : "henrique",

    uname: () =>
        "Linux HenriqueOS 6.x-zen-custom x86_64 GNU/Linux",

    pwd: () =>
        "/home/henrique",

    date: () =>
        new Date().toString(),

    uptime: () => {

        const seconds =
            Math.floor((Date.now() - bootTime) / 1000);

        const minutes =
            Math.floor(seconds / 60);

        const hours =
            Math.floor(minutes / 60);

        return `${hours}h ${minutes % 60}m ${seconds % 60}s`;

    },

    // ===================================================

    history: () => {

        if (history.length === 0)
            return "Histórico vazio.";

        return history.join("\n");

    },

    // ===================================================

    fortune: () =>
        fortunes[
            Math.floor(
                Math.random() * fortunes.length
            )
        ],

    // ===================================================

    coffee: () => `
Preparando espresso...

[██████████]

Cafeína carregada.

Produtividade +15%
`,

    // ===================================================

    pacman: () => `
resolving dependencies...
looking for conflicting packages...

Packages (1) coffee-6.8

Total Download Size: 999 MB

:: Proceed with installation? [Y/n]

Installing...

Energy levels restored.
`

};

// Configuração inicial
const terminal...
const files...
const projects...
const fortunes...
const bootMessages...

// Comandos
const responses = { ... }

// Funções
function print()
function setFavicon()
function bootSequence()
function newPrompt()

// Kernel do sistema
function handleCommand()

// Inicialização
bootSequence();

// =======================================================
// Funções auxiliares
// =======================================================

function print(text, isOutput = false) {

    const div = document.createElement("div");

    div.classList.add("line");

    if (isOutput)
        div.classList.add("command-output");

    div.innerHTML = text.replace(/\n/g, "<br>");

    terminal.appendChild(div);

    terminal.scrollTop = terminal.scrollHeight;

}

// =======================================================

function setFavicon(symbol) {

    favicon.href =
        `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><text x=%220%22 y=%2212%22 font-size=%2216%22>${symbol}</text></svg>`;

}

// =======================================================

function bootSequence() {

    let index = 0;

    function showNext() {

        if (index < bootMessages.length) {

            print(bootMessages[index]);

            index++;

            setTimeout(showNext, 150);

        } else {

            newPrompt();

        }

    }

    showNext();

}

// =======================================================

function newPrompt() {

    const symbol = sudoMode ? "#" : "$";

    const promptContainer = document.createElement("div");

    promptContainer.id = "input-line";
    promptContainer.classList.add("line");

    const promptSymbol = document.createElement("span");

    promptSymbol.classList.add("prompt-symbol");
    promptSymbol.textContent = symbol;

    const input = document.createElement("input");

    input.classList.add("cmd-input");

    input.spellcheck = false;
    input.autocomplete = "off";

    promptContainer.appendChild(promptSymbol);
    promptContainer.appendChild(input);

    terminal.appendChild(promptContainer);

    input.focus();

    terminal.scrollTop = terminal.scrollHeight;

    // ===================================================
    // Eventos do teclado
    // ===================================================

    input.addEventListener("keydown", (e) => {

        // Enter
        if (e.key === "Enter") {

            handleCommand(
                input.value.trim()
            );

            e.preventDefault();

        }

        // Histórico ↑
        else if (e.key === "ArrowUp") {

            if (historyIndex > 0) {

                historyIndex--;

                input.value =
                    history[historyIndex];

            }

            e.preventDefault();

        }

        // Histórico ↓
        else if (e.key === "ArrowDown") {

            if (historyIndex < history.length - 1) {

                historyIndex++;

                input.value =
                    history[historyIndex];

            }

            else {

                historyIndex =
                    history.length;

                input.value = "";

            }

            e.preventDefault();

        }

        // Autocomplete TAB
        else if (e.key === "Tab") {

            const current =
                input.value.trim();

            const commands = [

                ...Object.keys(responses),

                "clear",
                "ls",
                "cat",
                "sudo",
                "exit"

            ];

            const matches = commands
                .concat(
                    Object.keys(files)
                )
                .filter(item =>
                    item.startsWith(current)
                );

            if (matches.length === 1) {

                input.value =
                    matches[0];

            }

            e.preventDefault();

        }

    });

        }
// =======================================================
// Kernel do HenriqueOS
// =======================================================

function handleCommand(cmdText) {

    // Salva a linha digitada
    const historyLine = document.createElement("div");

    historyLine.classList.add("line");

    historyLine.innerHTML =
        `<span class="prompt-symbol">${sudoMode ? "#" : "$"}</span> ${cmdText}`;

    document
        .getElementById("input-line")
        .replaceWith(historyLine);

    // Histórico
    if (cmdText !== "") {

        history.push(cmdText);

        localStorage.setItem(
            "history",
            JSON.stringify(history)
        );

        historyIndex = history.length;

    }

    const parts = cmdText.split(" ");

    const cmd =
        parts[0].toLowerCase();

    const arg =
        parts.slice(1).join(" ");

    // ===================================================
    // Aliases
    // ===================================================

    const aliases = {

        cls: "clear",
        dir: "ls",
        fetch: "neofetch"

    };

    const command =
        aliases[cmd] || cmd;

    // ===================================================
    // clear
    // ===================================================

    if (command === "clear") {

        terminal.innerHTML = "";

    }

    // ===================================================
    // ls
    // ===================================================

    else if (command === "ls") {

        print(
            Object.keys(files).join("    "),
            true
        );

    }

    // ===================================================
    // cat
    // ===================================================

    else if (command === "cat") {

        if (files[arg]) {

            print(
                files[arg],
                true
            );

        }

        else {

            print(
                `cat: ${arg || "arquivo"}: não encontrado`,
                true
            );

        }

    }

    // ===================================================
    // sudo
    // ===================================================

    else if (command === "sudo") {

        sudoMode = true;

        setFavicon("#");

        print(
            "Access granted. Welcome, root.",
            true
        );

    }

    // ===================================================
    // exit
    // ===================================================

    else if (command === "exit") {

        if (sudoMode) {

            sudoMode = false;

            setFavicon("$");

            print(
                "Privilégios root revogados.",
                true
            );

        }

        else {

            print(
                "Reiniciando sessão...",
                true
            );

            setTimeout(
                () => location.reload(),
                1000
            );

            return;

        }

    }

    // ===================================================
    // rm -rf /
    // ===================================================

    else if (
        cmdText === "rm -rf /"
    ) {

        print(
`WARNING!

Nice try.

Permission denied.

Seu currículo sobreviveu.`,
            true
        );

    }

    // ===================================================
    // sudo rm -rf /
    // ===================================================

    else if (
        cmdText === "sudo rm -rf /"
    ) {

        print(
`rm: cannot remove '/'

Operation not permitted.

Exu Tatá Caveira protegeu o sistema.`,
            true
        );

    }

    // ===================================================
    // Comandos do sistema
    // ===================================================

    else if (
        responses[command]
    ) {

        print(
            responses[command](),
            true
        );

    }

    // ===================================================
    // Comando inexistente
    // ===================================================

    else if (
        command !== ""
    ) {

        print(
            `Comando não encontrado: ${command}

Digite 'help' para ver a lista.`,
            true
        );

    }

    newPrompt();

}

// =======================================================
// Inicialização
// =======================================================

bootSequence();
