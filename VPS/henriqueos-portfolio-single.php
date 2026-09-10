<?php
declare(strict_types=1);

$profile = [
    'name' => 'Henrique Eslabão da Fonseca Chaves',
    'short_name' => 'Henrique',
    'role' => 'Computação • Linux • Segurança • Eletrônica',
    'github' => 'https://github.com/hc8841',
    'email' => 'henriquemattos841@gmail.com',
    'location' => 'São Bento do Sul — SC, Brasil',
    'version' => '4.0.0',
];

$projects = [
    [
        'id' => '01',
        'name' => 'Evil Twin Wi-Fi Detector',
        'tag' => 'SECURITY / WIRELESS',
        'description' => 'Detecção de SSIDs suspeitos e análise de probabilidade de MITM em redes wireless.',
        'tech' => ['Wireless', 'Linux', 'Python'],
    ],
    [
        'id' => '02',
        'name' => 'PicoKeys / FIDO2',
        'tag' => 'HARDWARE / SECURITY',
        'description' => 'Experimentação com autenticação por hardware, FIDO2 e microcontrolador RP2040.',
        'tech' => ['RP2040', 'FIDO2', 'C'],
    ],
    [
        'id' => '03',
        'name' => 'HenriqueOS',
        'tag' => 'WEB / TERMINAL',
        'description' => 'Este portfólio: interface de terminal, histórico persistente, comandos e informações dinâmicas via PHP.',
        'tech' => ['PHP', 'JavaScript', 'CSS'],
    ],
    [
        'id' => '04',
        'name' => 'OpenWRT Lab',
        'tag' => 'NETWORKING / LAB',
        'description' => 'Customização de roteadores e experimentação prática com redes e firmware.',
        'tech' => ['OpenWRT', 'Linux', 'Networking'],
    ],
];

$skills = [
    'Linguagens' => ['C', 'Python', 'Assembly', 'Bash', 'PHP', 'JavaScript'],
    'Sistemas' => ['Arch Linux', 'Windows Server', 'OpenWRT', 'Linux CLI'],
    'Infra' => ['Git', 'Virtualização', 'Apache', 'Redes'],
    'Segurança' => ['Wireless', 'RF', 'Hardware Security', 'Análise de sistemas'],
    'Hardware' => ['Eletrônica', 'Microcontroladores', 'RP2040', 'RF'],
];

$commands = [
    'help' => 'lista os comandos disponíveis',
    'about' => 'sobre mim e meu foco',
    'skills' => 'stack técnica',
    'projects' => 'projetos e laboratório',
    'education' => 'formação e interesses',
    'contact' => 'links e contato',
    'neofetch' => 'informações do HenriqueOS',
    'status' => 'painel rápido',
    'whoami' => 'identidade atual',
    'sudo' => 'elevar privilégios (simulação)',
    'clear' => 'limpar o terminal',
];

$year = date('Y');
$phpVersion = PHP_MAJOR_VERSION . '.' . PHP_MINOR_VERSION;
?>
<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#080a08">
    <meta name="description" content="Portfólio de <?= htmlspecialchars($profile['name']) ?> — computação, Linux, segurança, eletrônica e projetos.">
    <title>HenriqueOS v<?= htmlspecialchars($profile['version']) ?> — Portfolio</title>
    <style>
:root{
    --bg:#070907;
    --panel:#0c100c;
    --panel-2:#101610;
    --line:#1b2b1b;
    --green:#62ff42;
    --green-dim:#2a9e1d;
    --cyan:#64d8ff;
    --text:#d9e5d5;
    --muted:#71806f;
    --red:#ff6c6c;
    --shadow:0 0 24px rgba(98,255,66,.08);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;background:var(--bg)}
body{
    margin:0;min-height:100vh;background:
    radial-gradient(circle at 80% 0,rgba(42,158,29,.09),transparent 30rem),
    radial-gradient(circle at 10% 35%,rgba(100,216,255,.035),transparent 28rem),var(--bg);
    color:var(--text);font-family:"Cascadia Code","Fira Code","JetBrains Mono","Courier New",monospace;
}
.scanlines{position:fixed;inset:0;pointer-events:none;z-index:20;opacity:.045;background:repeating-linear-gradient(0deg,#fff 0 1px,transparent 1px 4px)}
.topbar{
    position:sticky;top:0;z-index:10;height:58px;padding:0 clamp(18px,5vw,70px);
    display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);
    background:rgba(7,9,7,.86);backdrop-filter:blur(12px);
}
.brand{font-weight:800;letter-spacing:.08em;color:var(--green)}
.brand .dim{color:var(--muted)}
.dot,.status-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green);margin-right:8px}
.top-status{font-size:11px;color:var(--muted);letter-spacing:.12em}
.icon-btn{background:none;border:1px solid var(--line);color:var(--muted);width:32px;height:32px;cursor:pointer;font:inherit}
.icon-btn:hover{color:var(--green);border-color:var(--green-dim)}
.terminal{width:min(1180px,100%);margin:auto;padding:54px clamp(16px,4vw,44px) 70px}
.hero{min-height:390px;display:flex;align-items:center;justify-content:space-between;gap:40px;padding:35px 0 65px}
.hero-copy{max-width:760px}
.eyebrow{display:block;color:var(--green-dim);font-size:11px;letter-spacing:.16em;font-weight:700;margin-bottom:13px}
h1{font-size:clamp(42px,8vw,88px);line-height:.94;margin:0 0 18px;color:#eff8ec;letter-spacing:-.07em}
h1 span{color:var(--green);font-size:.32em;vertical-align:top;letter-spacing:0}
.hero-role{color:var(--cyan);font-size:clamp(14px,2vw,18px);margin:0 0 20px}
.hero-description{max-width:650px;color:var(--muted);font-size:14px;line-height:1.8}
.quick-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:28px}
.quick-command{
    display:inline-flex;align-items:center;border:1px solid var(--line);background:var(--panel);
    color:var(--green);padding:9px 13px;font:inherit;font-size:12px;text-decoration:none;cursor:pointer;
}
.quick-command:hover{border-color:var(--green-dim);background:var(--panel-2);box-shadow:var(--shadow)}
.terminal-orbit{width:210px;height:210px;flex:0 0 210px;display:grid;place-items:center;position:relative}
.orbit-ring{position:absolute;width:190px;height:190px;border:1px dashed var(--green-dim);border-radius:50%;animation:spin 18s linear infinite}
.orbit-ring:after{content:"";position:absolute;width:7px;height:7px;background:var(--green);border-radius:50%;top:9px;left:50%;box-shadow:0 0 18px var(--green)}
.orbit-core{width:105px;height:105px;border:1px solid var(--green-dim);display:grid;place-items:center;color:var(--green);font-size:30px;background:rgba(98,255,66,.03);box-shadow:inset 0 0 30px rgba(98,255,66,.05)}
@keyframes spin{to{transform:rotate(360deg)}}
.terminal-window{border:1px solid var(--line);background:rgba(12,16,12,.88);box-shadow:0 25px 70px rgba(0,0,0,.35),var(--shadow);min-height:360px}
.window-bar{height:38px;padding:0 13px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:12px;color:var(--muted);font-size:11px}
.window-dots{display:flex;gap:5px}.window-dots i{width:7px;height:7px;border-radius:50%;background:var(--line)}
.window-meta{margin-left:auto}
.output{padding:20px 20px 6px;min-height:290px;max-height:520px;overflow:auto}
.line{line-height:1.65;margin:0 0 6px;white-space:pre-wrap;overflow-wrap:anywhere}
.muted{color:var(--muted)}.accent{color:var(--cyan)}.ok{color:var(--green)}.err{color:var(--red)}
.welcome{margin-top:15px}
.input-row{display:flex;gap:10px;padding:7px 20px 22px;align-items:center}
.prompt{color:var(--green);font-weight:700;white-space:nowrap}
.cmd-input{min-width:0;flex:1;background:none;border:0;outline:0;color:var(--green);font:inherit;caret-color:var(--green)}
.dashboard{margin-top:100px}
.section-heading{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:25px}
h2{font-size:clamp(23px,4vw,38px);line-height:1.05;margin:0;color:#edf5ea;letter-spacing:-.04em}
.counter{font-size:10px;color:var(--muted);border:1px solid var(--line);padding:7px 10px}
.project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.project-card,.info-card,.skill-group{border:1px solid var(--line);background:linear-gradient(145deg,rgba(16,22,16,.9),rgba(10,13,10,.8));padding:22px;transition:.2s transform,.2s border-color,.2s box-shadow}
.project-card:hover,.info-card:hover,.skill-group:hover{transform:translateY(-3px);border-color:var(--green-dim);box-shadow:var(--shadow)}
.project-top{display:flex;justify-content:space-between;gap:15px;margin-bottom:35px}.project-id{color:var(--green);font-weight:700}.project-tag{color:var(--muted);font-size:9px;letter-spacing:.12em}
h3{font-size:17px;color:#edf5ea;margin:0 0 10px}.project-card p,.info-card p{color:var(--muted);font-size:12px;line-height:1.7;margin:0 0 18px}
.tech-list,.skill-list{display:flex;flex-wrap:wrap;gap:6px}.tech-list span,.skill-list span{font-size:10px;color:var(--cyan);border:1px solid #18333a;padding:5px 7px}
.split{display:grid;grid-template-columns:minmax(230px,.7fr) 1.3fr;gap:45px;align-items:start}
.skill-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.skill-group h3{font-size:12px;color:var(--green);margin-bottom:14px}
.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.info-card{min-height:220px}
.contact-links{display:flex;gap:10px;margin-top:30px}.contact-links a{color:var(--cyan);text-decoration:none;font-size:12px}.contact-links a:hover{text-decoration:underline}
footer{border-top:1px solid var(--line);padding:22px clamp(18px,5vw,70px);display:flex;justify-content:space-between;color:var(--muted);font-size:10px}
::selection{background:var(--green);color:#071007}
@media(max-width:760px){
    .hero{min-height:auto;padding-top:35px}.terminal-orbit{display:none}
    .project-grid,.info-grid,.split{grid-template-columns:1fr}.skill-grid{grid-template-columns:1fr}
    .dashboard{margin-top:70px}.section-heading{align-items:start;flex-direction:column}
    .window-meta{display:none}.output{padding:16px 14px}.input-row{padding:7px 14px 18px}
    .prompt{font-size:11px}.cmd-input{font-size:12px}
    footer{gap:15px;flex-direction:column}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.orbit-ring{animation:none}.project-card,.info-card,.skill-group{transition:none}}

.high-contrast{
    --bg:#000;--panel:#050505;--panel-2:#090909;--line:#2e472e;
    --green:#9aff85;--green-dim:#57c948;--cyan:#8be7ff;--text:#fff;--muted:#a2aaa0;
}

</style>
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%24%3C/text%3E%3C/svg%3E">
</head>
<body>
<div class="scanlines" aria-hidden="true"></div>

<header class="topbar">
    <div class="brand"><span class="dot"></span> HENRIQUE<span class="dim">OS</span></div>
    <div class="top-status"><span class="status-dot"></span> SYSTEM ONLINE</div>
    <button id="themeToggle" class="icon-btn" type="button" aria-label="Alternar contraste">◐</button>
</header>

<main id="terminal" class="terminal" aria-live="polite">
    <section class="hero">
        <div class="hero-copy">
            <div class="eyebrow">/home/henrique/portfolio</div>
            <h1>HenriqueOS <span>v<?= htmlspecialchars($profile['version']) ?></span></h1>
            <p class="hero-role"><?= htmlspecialchars($profile['role']) ?></p>
            <p class="hero-description">
                Transformando curiosidade em projetos — do terminal à bancada.
                Sistemas, redes, segurança wireless e hardware.
            </p>
            <div class="quick-actions">
                <button class="quick-command" data-command="about">./about</button>
                <button class="quick-command" data-command="projects">./projects</button>
                <a class="quick-command" href="<?= htmlspecialchars($profile['github']) ?>" target="_blank" rel="noopener">github ↗</a>
                <a class="quick-command" href="mailto:<?= htmlspecialchars($profile['email']) ?>">email ↗</a>
            </div>
        </div>
        <div class="terminal-orbit" aria-hidden="true">
            <div class="orbit-ring"></div>
            <div class="orbit-core">&gt;_</div>
        </div>
    </section>

    <section class="terminal-window" aria-label="Terminal interativo">
        <div class="window-bar">
            <div class="window-dots"><i></i><i></i><i></i></div>
            <span>henrique@henriqueOS: ~</span>
            <span class="window-meta">bash · <?= htmlspecialchars($phpVersion) ?></span>
        </div>

        <div id="output" class="output">
            <div class="line muted">HenriqueOS boot sequence...</div>
            <div class="line"><span class="ok">[ OK ]</span> kernel initialized</div>
            <div class="line"><span class="ok">[ OK ]</span> portfolio modules loaded</div>
            <div class="line"><span class="ok">[ OK ]</span> PHP <?= htmlspecialchars($phpVersion) ?> detected</div>
            <div class="line welcome">Digite <span class="accent">help</span> para começar.</div>
        </div>

        <div class="input-row">
            <span id="prompt" class="prompt">henrique@henriqueOS:~$</span>
            <input id="cmdInput" class="cmd-input" aria-label="Comando do terminal" autocomplete="off" spellcheck="false" autofocus>
        </div>
    </section>

    <section class="dashboard">
        <div class="section-heading">
            <div>
                <span class="eyebrow">01 // LAB</span>
                <h2>Projetos selecionados</h2>
            </div>
            <span class="counter"><?= str_pad((string)count($projects), 2, '0', STR_PAD_LEFT) ?> PROJECTS</span>
        </div>

        <div class="project-grid">
            <?php foreach ($projects as $project): ?>
                <article class="project-card">
                    <div class="project-top">
                        <span class="project-id">[<?= htmlspecialchars($project['id']) ?>]</span>
                        <span class="project-tag"><?= htmlspecialchars($project['tag']) ?></span>
                    </div>
                    <h3><?= htmlspecialchars($project['name']) ?></h3>
                    <p><?= htmlspecialchars($project['description']) ?></p>
                    <div class="tech-list">
                        <?php foreach ($project['tech'] as $tech): ?>
                            <span><?= htmlspecialchars($tech) ?></span>
                        <?php endforeach; ?>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="dashboard split">
        <div>
            <span class="eyebrow">02 // STACK</span>
            <h2>Ferramentas que fazem parte do laboratório</h2>
        </div>
        <div class="skill-grid">
            <?php foreach ($skills as $group => $items): ?>
                <div class="skill-group">
                    <h3><?= htmlspecialchars($group) ?></h3>
                    <div class="skill-list">
                        <?php foreach ($items as $item): ?><span><?= htmlspecialchars($item) ?></span><?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="dashboard info-grid">
        <article class="info-card">
            <span class="eyebrow">03 // EDUCATION</span>
            <h2>Formação</h2>
            <p><strong>Técnico em Informática</strong> — 2023</p>
            <p>Engenharia de Computação</p>
            <p class="muted">Interesses: segurança RF/wireless, hardware security e eletrônica.</p>
        </article>
        <article class="info-card">
            <span class="eyebrow">04 // CONTACT</span>
            <h2>Vamos conversar?</h2>
            <p>Se a ideia envolve Linux, hardware, redes ou segurança, provavelmente vale investigar.</p>
            <div class="contact-links">
                <a href="<?= htmlspecialchars($profile['github']) ?>" target="_blank" rel="noopener">GitHub ↗</a>
                <a href="mailto:<?= htmlspecialchars($profile['email']) ?>">E-mail ↗</a>
            </div>
        </article>
    </section>
</main>

<footer>
    <span>© <?= $year ?> <?= htmlspecialchars($profile['short_name']) ?></span>
    <span>built with PHP · JS · CSS · curiosity</span>
</footer>

<script>
window.PORTFOLIO = <?= json_encode([
    'profile' => $profile,
    'commands' => $commands,
    'skills' => $skills,
    'projects' => $projects,
    'phpVersion' => $phpVersion,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?>;
</script>
<script>
(() => {
    "use strict";

    const output = document.getElementById("output");
    const input = document.getElementById("cmdInput");
    const prompt = document.getElementById("prompt");
    const themeToggle = document.getElementById("themeToggle");
    const data = window.PORTFOLIO || {};
    const profile = data.profile || {};
    let rootMode = false;
    let history = JSON.parse(localStorage.getItem("henriqueos-history") || "[]");
    let historyIndex = history.length;

    const esc = (value) => String(value).replace(/[&<>"']/g, char => ({
        "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[char]));

    const print = (html, cls = "") => {
        const line = document.createElement("div");
        line.className = `line ${cls}`.trim();
        line.innerHTML = html;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    };

    const commands = {
        help() {
            return `<span class="accent">AVAILABLE COMMANDS</span>\n\n` +
                Object.entries(data.commands || {}).map(([name, desc]) =>
                    `  <span class="ok">${name.padEnd(11, " ")}</span> ${esc(desc)}`
                ).join("\n") +
                `\n\n<span class="muted">↑/↓ histórico · Tab autocomplete · Ctrl+L clear</span>`;
        },
        about() {
            return `<span class="accent">${esc(profile.name)}</span>\n` +
                `\n${esc(profile.role)}\n\n` +
                `Técnico em Informática com foco em sistemas, Linux, segurança,\n` +
                `wireless/RF e hardware. Gosto de transformar curiosidade em projeto:\n` +
                `do terminal à bancada.\n\n<span class="muted">${esc(profile.location)}</span>`;
        },
        skills() {
            return `<span class="accent">TECHNICAL STACK</span>\n\n` +
                Object.entries(data.skills || {}).map(([group, items]) =>
                    `<span class="ok">${esc(group.padEnd(13, " "))}</span> ${items.map(esc).join(" · ")}`
                ).join("\n");
        },
        projects() {
            return `<span class="accent">LAB / PROJECTS</span>\n\n` +
                (data.projects || []).map(p =>
                    `<span class="ok">[${esc(p.id)}]</span> <strong>${esc(p.name)}</strong>\n` +
                    `     ${esc(p.description)}\n` +
                    `     <span class="muted">${p.tech.map(esc).join(" · ")}</span>`
                ).join("\n\n");
        },
        education() {
            return `<span class="accent">EDUCATION</span>\n\n` +
                `  Técnico em Informática — 2023\n` +
                `  Engenharia de Computação\n\n` +
                `  <span class="muted">Interesses: segurança RF/wireless,\n` +
                `  hardware security e eletrônica.</span>`;
        },
        contact() {
            return `<span class="accent">CONTACT</span>\n\n` +
                `  GitHub  → <a href="${esc(profile.github)}" target="_blank" rel="noopener">${esc(profile.github)}</a>\n` +
                `  E-mail  → <a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a>\n` +
                `  Local   → ${esc(profile.location)}`;
        },
        neofetch() {
            return `<span class="accent">       _   _                 _          ___  ____</span>\n` +
                `<span class="accent">      | | | | ___ _ __  _ __(_) ___    / _ \\/ ___|</span>\n` +
                `<span class="accent">      | |_| |/ _ \\ '_ \\| '__| |/ _ \\  | | | \\___ \\</span>\n` +
                `<span class="accent">      |  _  |  __/ | | | |  | | (_) | | |_| |___) |</span>\n` +
                `<span class="accent">      |_| |_|\\___|_| |_|_|  |_|\\___/   \\___/|____/</span>\n\n` +
                `  OS:        HenriqueOS v${esc(profile.version)}\n` +
                `  Shell:     henrique-bash\n` +
                `  Runtime:   PHP ${esc(data.phpVersion || "?")}\n` +
                `  Kernel:    curiosity-driven\n` +
                `  Uptime:    sempre aprendendo`;
        },
        status() {
            return `<span class="ok">● ONLINE</span>\n` +
                `  portfolio    v${esc(profile.version)}\n` +
                `  mode         ${rootMode ? "root" : "user"}\n` +
                `  projects     ${(data.projects || []).length} active\n` +
                `  curiosity    100%`;
        },
        whoami() { return rootMode ? "root" : "henrique"; },
        fortune() {
            const quotes = [
                "Se funciona, documenta. Se não funciona, mede.",
                "O osciloscópio sabe a verdade.",
                "Compila na minha máquina.",
                "Curiosidade é combustível de laboratório."
            ];
            return quotes[Math.floor(Math.random() * quotes.length)];
        },
        coffee() { return `Cafeína carregada. <span class="ok">[OK]</span>`; },
        sudo() { rootMode = true; updatePrompt(); return `<span class="ok">Access granted.</span> Welcome, root.`; },
        exit() { rootMode = false; updatePrompt(); return "Sessão encerrada. Voltando para user."; },
        clear() { output.innerHTML = ""; return ""; },
        "rm -rf /"() { return `<span class="err">Permission denied.</span> Nice try.`; }
    };

    function updatePrompt() {
        prompt.textContent = rootMode ? "root@henriqueOS:~#" : "henrique@henriqueOS:~$";
    }

    function run(raw) {
        const cmd = raw.trim();
        if (!cmd) return;

        print(`<span class="prompt">${esc(prompt.textContent)}</span> ${esc(cmd)}`);
        history.push(cmd);
        history = history.slice(-100);
        localStorage.setItem("henriqueos-history", JSON.stringify(history));
        historyIndex = history.length;

        if (commands[cmd]) {
            const result = commands[cmd]();
            if (result) print(result, "command-output");
        } else {
            print(`<span class="err">bash: ${esc(cmd)}: command not found</span>\n<span class="muted">Digite 'help' para ver os comandos.</span>`, "command-output");
        }
        input.focus();
    }

    function autocomplete() {
        const value = input.value.trim().toLowerCase();
        if (!value) return;
        const matches = Object.keys(commands).filter(command => command.startsWith(value));
        if (matches.length === 1) input.value = matches[0];
        else if (matches.length > 1) print(matches.map(m => `<span class="ok">${esc(m)}</span>`).join("  "), "command-output");
    }

    input.addEventListener("keydown", event => {
        if (event.key === "Enter") { event.preventDefault(); run(input.value); input.value = ""; }
        if (event.key === "Tab") { event.preventDefault(); autocomplete(); }
        if (event.key === "ArrowUp") {
            event.preventDefault();
            if (!history.length) return;
            historyIndex = Math.max(0, historyIndex - 1);
            input.value = history[historyIndex] || "";
        }
        if (event.key === "ArrowDown") {
            event.preventDefault();
            historyIndex = Math.min(history.length, historyIndex + 1);
            input.value = history[historyIndex] || "";
        }
        if (event.ctrlKey && event.key.toLowerCase() === "l") {
            event.preventDefault(); output.innerHTML = "";
        }
    });

    document.querySelectorAll(".quick-command[data-command]").forEach(button => {
        button.addEventListener("click", () => {
            run(button.dataset.command);
            document.querySelector(".terminal-window").scrollIntoView({behavior:"smooth", block:"center"});
        });
    });

    themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("high-contrast");
        themeToggle.textContent = document.documentElement.classList.contains("high-contrast") ? "☀" : "◐";
    });

    document.addEventListener("click", event => {
        if (!event.target.closest("a,button,input")) input.focus();
    });
})();

</script>
</body>
</html>
