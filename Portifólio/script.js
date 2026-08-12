const terminal=document.getElementById("terminal");
const favicon=document.getElementById("favicon");
let sudoMode=false;
let history=JSON.parse(localStorage.getItem("history")||"[]");
let historyIndex=history.length;

const profile={
 name:"Henrique Eslabão da Fonseca Chaves",
 role:"Computação • Segurança • Eletrônica • Linux",
 github:"https://github.com/hc8841",
 email:"henriquemattos841@gmail.com"
};

const commands={
 help:()=>`<span class="banner">COMANDOS</span>
  about       sobre mim e foco atual
  skills      stack técnica
  projects    projetos e laboratório
  education   formação
  contact     links e contato
  neofetch    sistema HenriqueOS
  whoami      identidade atual
  status      painel rápido
  history     histórico do terminal
  fortune     frase aleatória
  coffee      diagnóstico científico
  pacman      gerenciador de pacotes
  clear       limpar terminal
  sudo        elevar privilégios
  exit        sair do modo root

<span class="muted">Dica:</span> use ↑/↓ para navegar no histórico.`,
 about:()=>`<div class="card"><span class="accent">${profile.name}</span>
Técnico em Informática • Computação • Segurança

Foco: sistemas, Linux, segurança wireless/RF e hardware.
Gosto de transformar curiosidade em projeto: do terminal à bancada.
<span class="muted">Portfólio pessoal em modo terminal.</span></div>`,
 skills:()=>`<span class="banner">STACK</span>
  Linguagens   C • Python • Assembly • Bash
  Sistemas     Arch Linux • Windows Server • OpenWRT
  Ferramentas  Git • Virtualização • Linux CLI
  Segurança    Redes • Wireless • análise de sistemas
  Hardware     Eletrônica • microcontroladores • RF`,
 projects:()=>`<span class="banner">LAB / PROJECTS</span>
  [01] Evil Twin Wi-Fi Detector
       Detecção de SSIDs suspeitos e análise de probabilidade de MITM.

  [02] PicoKeys / FIDO2
       Experimentação com autenticação por hardware e RP2040.

  [03] HenriqueOS
       Este próprio portfólio: terminal web, persistência local e comandos.

  [04] OpenWRT Lab
       Customização de roteadores e experimentação com redes.`,
 education:()=>`<span class="banner">EDUCATION</span>
  Técnico em Informática — 2023
  Engenharia de Computação
  Interesse acadêmico: segurança RF/wireless e hardware security`,
 contact:()=>`<span class="banner">CONTACT</span>
  GitHub  → <a href="${profile.github}" target="_blank" rel="noopener">${profile.github}</a>
  E-mail  → <a href="mailto:${profile.email}">${profile.email}</a>`,
 neofetch:()=>`<span class="banner">          _    _            _          ___  ____</span>
<span class="banner">         | |  | |          (_)        / _ \\/ ___|</span>
<span class="banner">         | |__| | ___ _ __  _  __ _  | | | \\___ \\</span>
<span class="banner">         |  __  |/ _ \\ '_ \\| |/ _ \` | | |_| |___) |</span>
<span class="banner">         | |  | |  __/ | | | | (_| |  \\___/|____/</span>
<span class="banner">         |_|  |_|\\___|_| |_|_|\\__,_|</span>

  OS:       HenriqueOS v3.0
  Shell:    henrique-bash
  Kernel:   curiosity-driven
  CPU:      Curiosity @ 4GHz
  Memory:   Coffee-driven 32GB
  Uptime:   sempre aprendendo`,
 whoami:()=>sudoMode?"root":"henrique",
 status:()=>`<span class="ok">● ONLINE</span>
  portfolio    v3.0
  mode         ${sudoMode?"root":"user"}
  projects     active
  curiosity    100%`,
 history:()=>history.length?history.map((x,i)=>`${String(i+1).padStart(3," ")}  ${escapeHtml(x)}`).join("\n"):"Histórico vazio.",
 fortune:()=>["Compila na minha máquina.","There is no place like 127.0.0.1","Se funciona, documenta. Se não funciona, mede.","O osciloscópio sabe a verdade."][Math.floor(Math.random()*4)],
 coffee:()=>`Cafeína carregada. <span class="ok">[OK]</span>`,
 pacman:()=>`:: Synchronizing package databases...
 core                  [####################] 100%
 coffee                [####################] 100%
:: Transaction complete. <span class="ok">Done.</span>`
};

function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function print(text,out=false){
 const d=document.createElement("div");
 d.className="line"+(out?" command-output":"");
 d.innerHTML=text.replace(/\n/g,"<br>");
 terminal.appendChild(d);
 terminal.scrollTop=terminal.scrollHeight;
}
function setFavicon(sym){
 favicon.href=`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><text x=%220%22 y=%2212%22 font-size=%2216%22>${encodeURIComponent(sym)}</text></svg>`;
}
function promptText(){return sudoMode?"root@henriqueOS:~#":"henrique@henriqueOS:~$";}
function newPrompt(){
 const c=document.createElement("div"); c.id="input-line"; c.className="line";
 c.innerHTML=`<span class="prompt-symbol">${promptText()}</span><input class="cmd-input" aria-label="Terminal command" autocomplete="off" spellcheck="false">`;
 terminal.appendChild(c);
 const i=c.querySelector("input"); i.focus();
 i.addEventListener("keydown",e=>{
   if(e.key==="Enter"){handleCommand(i.value.trim());}
   else if(e.key==="ArrowUp"){e.preventDefault();if(history.length){historyIndex=Math.max(0,historyIndex-1);i.value=history[historyIndex]||"";}}
   else if(e.key==="ArrowDown"){e.preventDefault();if(history.length){historyIndex=Math.min(history.length,historyIndex+1);i.value=history[historyIndex]||"";}}
 });
}
function handleCommand(cmdText){
 const old=document.getElementById("input-line");
 if(old) old.outerHTML=`<div class="line"><span class="prompt-symbol">${promptText()}</span> ${escapeHtml(cmdText)}</div>`;
 if(cmdText){history.push(cmdText);history=history.slice(-100);localStorage.setItem("history",JSON.stringify(history));}
 historyIndex=history.length;
 if(cmdText==="clear"){terminal.innerHTML="";newPrompt();return;}
 if(cmdText==="sudo"){sudoMode=true;setFavicon("#");print("Access granted. Welcome, root.",true);}
 else if(cmdText==="exit"){sudoMode=false;setFavicon("$");print("Sessão encerrada. Voltando para user.",true);}
 else if(cmdText==="rm -rf /"){print('<span class="err">Permission denied.</span> Nice try.',true);}
 else if(commands[cmdText]) print(commands[cmdText](),true);
 else if(cmdText) print(`<span class="err">bash: ${escapeHtml(cmdText)}: command not found</span><br><span class="muted">Digite 'help' para ver os comandos.</span>`,true);
 newPrompt();
}
print('<span class="banner">╔══════════════════════════════════════════════════════════╗</span>');
print('<span class="banner">║  HenriqueOS v3.0 :: personal portfolio terminal       ║</span>');
print('<span class="banner">╚══════════════════════════════════════════════════════════╝</span>');
print('<span class="muted">Initializing portfolio... </span><span class="ok">[OK]</span>');
print("Digite <span class=\"accent\">help</span> para começar. <span class=\"muted\">↑/↓ = histórico</span>");
newPrompt();
