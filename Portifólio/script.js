const terminal=document.getElementById("terminal");
const favicon=document.getElementById("favicon");
let sudoMode=false;
let history=JSON.parse(localStorage.getItem("history"))||[];
let historyIndex=history.length;

const responses={
help:()=>`about skills projects contact neofetch whoami history fortune coffee pacman clear sudo exit`,
about:()=>`Henrique Eslabão da Fonseca Chaves
Técnico em Informática (2023)
Linux | Segurança | C | Assembly`,
skills:()=>`C, Python, Assembly
Arch Linux, Windows Server
Git, Bash, Virtualização`,
projects:()=>`GitHub: https://github.com/hc8841`,
contact:()=>`Email: henriquemattos841@gmail.com`,
neofetch:()=>`OS: HenriqueOS v2.1
Shell: henrique-bash
CPU: Curiosity @ 4GHz
Memory: Coffee-driven 32GB`,
whoami:()=>sudoMode?"root":"henrique",
history:()=>history.join("\n")||"Histórico vazio.",
fortune:()=>["Compila na minha máquina.","There is no place like 127.0.0.1"][Math.floor(Math.random()*2)],
coffee:()=>`Cafeína carregada.`,
pacman:()=>`Installing coffee... Success.`
};

function print(text,out=false){
 const d=document.createElement("div");
 d.className="line"+(out?" command-output":"");
 d.innerHTML=text.replace(/\n/g,"<br>");
 terminal.appendChild(d);
 terminal.scrollTop=terminal.scrollHeight;
}

function setFavicon(sym){
 favicon.href=`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><text x=%220%22 y=%2212%22 font-size=%2216%22>${sym}</text></svg>`;
}

function newPrompt(){
 const c=document.createElement("div");
 c.id="input-line";
 c.className="line";
 c.innerHTML=`<span class="prompt-symbol">${sudoMode?"#":"$"}</span>`;
 const i=document.createElement("input");
 i.className="cmd-input";
 c.appendChild(i);
 terminal.appendChild(c);
 i.focus();
 i.addEventListener("keydown",e=>{
  if(e.key==="Enter") handleCommand(i.value.trim());
 });
}

function handleCommand(cmdText){
 document.getElementById("input-line").outerHTML=`<div class="line"><span class="prompt-symbol">${sudoMode?"#":"$"}</span> ${cmdText}</div>`;
 if(cmdText){
  history.push(cmdText);
  localStorage.setItem("history",JSON.stringify(history));
 }
 if(cmdText==="clear"){terminal.innerHTML="";}
 else if(cmdText==="sudo"){sudoMode=true;setFavicon("#");print("Access granted.",true);}
 else if(cmdText==="exit"){sudoMode=false;setFavicon("$");print("Sessão encerrada.",true);}
 else if(cmdText==="rm -rf /"){print("Permission denied.",true);}
 else if(responses[cmdText]){print(responses[cmdText](),true);}
 else if(cmdText){print("Comando não encontrado.",true);}
 newPrompt();
}

print("Initializing HenriqueOS v2.1...");
print("Type 'help' to start.");
newPrompt();
